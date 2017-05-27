INSERT INTO ptcd_contact (first_name, last_name, message, date)
VALUES ($1, $2, $3, $4)
RETURNING *
;
