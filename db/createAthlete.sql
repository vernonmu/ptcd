INSERT INTO ptcd_athlete (athlete_fn, athlete_ln, athlete_dob, athlete_gender, athlete_scool, first_name, last_name, address_street, address_city, address_zip, role, telephone, email, emergency_one_fn, emergency_one_ln, emergency_one_rel, emergency_one_phone,emergency_two_fn, emergency_two_ln, emergency_two_rel, emergency_two_phone, medications, treatment, date)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24)
RETURNING *;
