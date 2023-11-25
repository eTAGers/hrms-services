ALTER TABLE userdetails
ADD CONSTRAINT unique_email UNIQUE (email),
ADD CONSTRAINT unique_mobile UNIQUE (mobile);
