import { Pool } from 'pg'

export const pool = new Pool(
{
host:'ec2-34-195-143-54.compute-1.amazonaws.com',
user:'jlhoxbwtqzvxgq',
password:'06ba5fcf71ae2ef2f4f1e35501c59f9c83b4f5a750aaf473a68f6f6d9f20df0c',
database:'dbfdi9bk0abmbj',
port:5432,
ssl: { rejectUnauthorized: false}

}
);