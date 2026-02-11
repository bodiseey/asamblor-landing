-- TWENTY-CORE ARCHITECTURE FOR ASAMBLOR COMMAND CENTER
-- Faithful implementation of Twenty CRM (twentyhq/twenty) Logical Model

-- WARNING: This will reset the entire database schema to align with Twenty Standards.
DROP TABLE IF EXISTS activities CASCADE;
DROP TABLE IF EXISTS tasks CASCADE;
DROP TABLE IF EXISTS notes CASCADE;
DROP TABLE IF EXISTS opportunities CASCADE;
DROP TABLE IF EXISTS people CASCADE;
DROP TABLE IF EXISTS leads CASCADE; -- Legacy
DROP TABLE IF EXISTS companies CASCADE;
DROP TABLE IF EXISTS pipeline_stages CASCADE;
DROP TABLE IF EXISTS field_metadata CASCADE;
DROP TABLE IF EXISTS object_metadata CASCADE;
DROP TABLE IF EXISTS profiles CASCADE;
DROP TABLE IF EXISTS integrations CASCADE;
DROP TABLE IF EXISTS tenants CASCADE;

-- 1. Enable UUID Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Infrastructure: Tenants (Workspaces)
CREATE TABLE tenants (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    domain TEXT,
    logo_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Metadata Layer: The "Logical" engine of Twenty
CREATE TABLE object_metadata (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id) ON DELETE CASCADE,
    name TEXT NOT NULL, -- e.g. 'person', 'company'
    label_singular TEXT NOT NULL,
    label_plural TEXT NOT NULL,
    icon TEXT,
    is_custom BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE field_metadata (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    object_id UUID REFERENCES object_metadata(id) ON DELETE CASCADE,
    name TEXT NOT NULL, -- e.g. 'firstName', 'annualRevenue'
    label TEXT NOT NULL,
    type TEXT NOT NULL, -- 'text', 'number', 'date', 'select', 'relation', 'boolean'
    is_nullable BOOLEAN DEFAULT true,
    is_custom BOOLEAN DEFAULT false,
    settings JSONB DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. User System
CREATE TABLE profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    tenant_id UUID REFERENCES tenants(id) ON DELETE CASCADE,
    first_name TEXT,
    last_name TEXT,
    full_name TEXT,
    email TEXT,
    avatar_url TEXT,
    role TEXT DEFAULT 'member', -- member, admin, owner
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. Standard Object: COMPANIES
CREATE TABLE companies (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id) ON DELETE CASCADE NOT NULL,
    name TEXT NOT NULL,
    domain_name TEXT,
    linkedin_url TEXT,
    employees_count INTEGER,
    annual_revenue DECIMAL(15, 2),
    industry TEXT,
    address TEXT,
    city TEXT,
    state TEXT,
    country TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 6. Standard Object: PEOPLE (Replaces Leads)
CREATE TABLE people (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id) ON DELETE CASCADE NOT NULL,
    company_id UUID REFERENCES companies(id) ON DELETE SET NULL,
    first_name TEXT,
    last_name TEXT,
    email TEXT,
    phone TEXT,
    job_title TEXT,
    linkedin_url TEXT,
    city TEXT,
    status TEXT DEFAULT 'New',
    source TEXT DEFAULT 'Manual',
    avatar_url TEXT,
    last_activity_at TIMESTAMP WITH TIME ZONE,
    created_by_user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 7. Standard Object: LOADS (Specialized Opportunities)
CREATE TABLE loads (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id) ON DELETE CASCADE NOT NULL,
    driver_id UUID, -- References drivers table defined below
    customer_id UUID REFERENCES companies(id) ON DELETE SET NULL,
    name TEXT NOT NULL,
    load_number TEXT,
    status TEXT DEFAULT 'Unassigned', -- Unassigned, Assigned, In Transit, Delivered, Cancelled
    pickup_city TEXT,
    pickup_state TEXT,
    pickup_date TIMESTAMP WITH TIME ZONE,
    delivery_city TEXT,
    delivery_state TEXT,
    delivery_date TIMESTAMP WITH TIME ZONE,
    amount_value DECIMAL(15, 2) DEFAULT 0,
    amount_currency_code TEXT DEFAULT 'USD',
    weight DECIMAL(10, 2),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 8. Standard Object: VEHICLES (Trucks/Trailers)
CREATE TABLE vehicles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id) ON DELETE CASCADE NOT NULL,
    unit_number TEXT NOT NULL,
    vin TEXT,
    make TEXT,
    model TEXT,
    year INTEGER,
    type TEXT NOT NULL, -- Semi, Reefer, Flatbed, etc.
    status TEXT DEFAULT 'Available', -- Available, Dispatched, Maintenance
    last_inspection_date DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 9. Standard Object: DRIVERS (Specialized People)
CREATE TABLE drivers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id) ON DELETE CASCADE NOT NULL,
    person_id UUID REFERENCES people(id) ON DELETE CASCADE,
    license_number TEXT,
    license_state TEXT,
    license_expiration DATE,
    years_experience INTEGER,
    assigned_vehicle_id UUID REFERENCES vehicles(id) ON DELETE SET NULL,
    status TEXT DEFAULT 'Active', -- Active, Inactive, On Leave
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 10. Standard Object: TASKS & NOTES (Universal)
-- (Tasks & Notes modified to link to Loads/Drivers)
CREATE TABLE tasks (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id) ON DELETE CASCADE NOT NULL,
    person_id UUID REFERENCES people(id) ON DELETE SET NULL,
    company_id UUID REFERENCES companies(id) ON DELETE SET NULL,
    load_id UUID REFERENCES loads(id) ON DELETE SET NULL,
    driver_id UUID REFERENCES drivers(id) ON DELETE SET NULL,
    title TEXT NOT NULL,
    description TEXT,
    due_at TIMESTAMP WITH TIME ZONE,
    status TEXT DEFAULT 'Todo',
    priority TEXT DEFAULT 'Medium',
    created_by_user_id UUID REFERENCES auth.users(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE notes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id) ON DELETE CASCADE NOT NULL,
    person_id UUID REFERENCES people(id) ON DELETE SET NULL,
    company_id UUID REFERENCES companies(id) ON DELETE SET NULL,
    load_id UUID REFERENCES loads(id) ON DELETE SET NULL,
    driver_id UUID REFERENCES drivers(id) ON DELETE SET NULL,
    content TEXT NOT NULL,
    created_by_user_id UUID REFERENCES auth.users(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 9. Standard Object: ACTIVITIES (Timeline)
CREATE TABLE activities (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id) ON DELETE CASCADE NOT NULL,
    person_id UUID REFERENCES people(id) ON DELETE CASCADE,
    type TEXT NOT NULL, -- 'call', 'email', 'sms', 'meeting', 'status_change'
    direction TEXT, -- 'inbound', 'outbound'
    title TEXT,
    content TEXT,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    metadata JSONB DEFAULT '{}'
);

-- 10. Integrations
CREATE TABLE integrations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id) ON DELETE CASCADE NOT NULL,
    provider TEXT NOT NULL,
    api_key TEXT,
    webhook_secret TEXT,
    settings JSONB DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 11. Row Level Security (RLS) Implementation
-- Function to get current user's tenant_id
CREATE OR REPLACE FUNCTION get_current_tenant_id()
RETURNS UUID AS $$
    SELECT tenant_id FROM profiles WHERE id = auth.uid();
$$ LANGUAGE sql SECURITY DEFINER;

-- Enable RLS
ALTER TABLE tenants ENABLE ROW LEVEL SECURITY;
ALTER TABLE object_metadata ENABLE ROW LEVEL SECURITY;
ALTER TABLE field_metadata ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE people ENABLE ROW LEVEL SECURITY;
ALTER TABLE pipeline_stages ENABLE ROW LEVEL SECURITY;
ALTER TABLE opportunities ENABLE ROW LEVEL SECURITY;
ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE integrations ENABLE ROW LEVEL SECURITY;

-- Shared Policy Template
CREATE POLICY "Tenant isolation" ON tenants FOR ALL USING (id = get_current_tenant_id());
CREATE POLICY "Tenant isolation" ON object_metadata FOR ALL USING (tenant_id = get_current_tenant_id());
CREATE POLICY "Tenant isolation" ON field_metadata FOR ALL USING (object_id IN (SELECT id FROM object_metadata WHERE tenant_id = get_current_tenant_id()));
CREATE POLICY "Tenant isolation" ON profiles FOR ALL USING (tenant_id = get_current_tenant_id());
CREATE POLICY "Tenant isolation" ON companies FOR ALL USING (tenant_id = get_current_tenant_id());
CREATE POLICY "Tenant isolation" ON people FOR ALL USING (tenant_id = get_current_tenant_id());
CREATE POLICY "Tenant isolation" ON pipeline_stages FOR ALL USING (tenant_id = get_current_tenant_id());
CREATE POLICY "Tenant isolation" ON opportunities FOR ALL USING (tenant_id = get_current_tenant_id());
CREATE POLICY "Tenant isolation" ON tasks FOR ALL USING (tenant_id = get_current_tenant_id());
CREATE POLICY "Tenant isolation" ON notes FOR ALL USING (tenant_id = get_current_tenant_id());
CREATE POLICY "Tenant isolation" ON activities FOR ALL USING (tenant_id = get_current_tenant_id());
CREATE POLICY "Tenant isolation" ON integrations FOR ALL USING (tenant_id = get_current_tenant_id());

-- 12. Automated Infrastructure Triggers
-- Seed default Metadata and Pipeline Stages for every new Tenant
CREATE OR REPLACE FUNCTION initialize_tenant_metadata()
RETURNS TRIGGER AS $$
DECLARE
    person_obj_id UUID;
    company_obj_id UUID;
BEGIN
    -- 1. Seed Pipeline Stages
    INSERT INTO pipeline_stages (tenant_id, name, position) VALUES
    (NEW.id, 'New Lead', 1),
    (NEW.id, 'Interested', 2),
    (NEW.id, 'Contacted', 3),
    (NEW.id, 'Background Check', 4),
    (NEW.id, 'Qualified', 5);

    -- 2. Seed Object Metadata
    INSERT INTO object_metadata (tenant_id, name, label_singular, label_plural, icon)
    VALUES 
    (NEW.id, 'person', 'Person', 'People', 'User'),
    (NEW.id, 'company', 'Company', 'Companies', 'Building'),
    (NEW.id, 'load', 'Load', 'Loads', 'Truck'),
    (NEW.id, 'vehicle', 'Vehicle', 'Vehicles', 'Truck'),
    (NEW.id, 'driver', 'Driver', 'Drivers', 'UserCheck')
    RETURNING id, name INTO person_obj_id, person_name_check; -- Using a dummy to handle the returning

    -- 3. Seed Field Metadata (Examples)
    -- Drivers specialized fields
    INSERT INTO field_metadata (object_id, name, label, type) 
    SELECT id, 'licenseNumber', 'License Number', 'text' FROM object_metadata WHERE tenant_id = NEW.id AND name = 'driver';
    
    INSERT INTO field_metadata (object_id, name, label, type) 
    SELECT id, 'pickupCity', 'Pickup City', 'text' FROM object_metadata WHERE tenant_id = NEW.id AND name = 'load';

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 13. Update RLS for new tables
ALTER TABLE loads ENABLE ROW LEVEL SECURITY;
ALTER TABLE vehicles ENABLE ROW LEVEL SECURITY;
ALTER TABLE drivers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Tenant isolation" ON loads FOR ALL USING (tenant_id = get_current_tenant_id());
CREATE POLICY "Tenant isolation" ON vehicles FOR ALL USING (tenant_id = get_current_tenant_id());
CREATE POLICY "Tenant isolation" ON drivers FOR ALL USING (tenant_id = get_current_tenant_id());

CREATE TRIGGER on_tenant_created
AFTER INSERT ON tenants
FOR EACH ROW EXECUTE FUNCTION initialize_tenant_metadata();
