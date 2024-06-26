create table event_inquiries (
    id uuid primary key default uuid_generate_v4(),
    event_start timestamp not null,
    event_end timestamp not null,
    number_of_guest integer not null check (number_of_guest >= 1),
    event_type text not null,
    name text not null,
    email text not null check (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
    phone text not null check (length(phone) >= 10),
    message text not null,
    created_at timestamp with time zone default now()
);

alter table event_inquiries enable row level security;

create policy "Only authenticated users can see event inquiries"
on event_inquiries
for select
to authenticated
using (true);
