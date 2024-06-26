create table room_inquiries (
  id uuid primary key default uuid_generate_v4(),
  check_in_date date not null,
  check_out_date date not null,
  adults integer not null check (adults >= 1),
  children integer not null check (children >= 0),
  room_type varchar(255) not null,
  number_of_rooms integer not null check (number_of_rooms >= 1),
  name varchar(255) not null,
  email varchar(255) not null check (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  phone varchar(20) not null check (length(phone) >= 10),
  message text not null
);

alter table room_inquiries enable row level security;

create policy "Only authenticated users can see room inquiries"
on room_inquiries
for select
to authenticated
using (true);