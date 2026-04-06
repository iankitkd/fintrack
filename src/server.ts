import "./config/openapi.js";

import "./modules/auth/auth.docs.js";
import "./modules/users/user.docs.js";
import "./modules/records/record.docs.js";
import "./modules/dashboard/dashboard.docs.js";

import app from "./app.js";
import { config } from "./config/index.js";

const PORT = config.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
