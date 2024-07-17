.env should be always in root folder

in open-source apps we give .env.sample

after changes done in .env....you need to restart app...as it is loaded only once

in CRA,We need to write REACT_APP_DB_PASS="SOMETHING"
to access in CRA we write process.env.REACT_APP_DB_PASS;

in VITE we need to write VITE_DB_PASS="SOMETHING" if console.log krna h OR JUST DB_PASS="SOMETHING" inko log krne pe undefined aayega
to access in VITE we write import.meta.env.REACT_APP_DB_PASS;