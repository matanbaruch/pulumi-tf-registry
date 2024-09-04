// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

declare var exports: any;
const __config = new pulumi.Config("postgresql");

/**
 * Use rds_iam instead of password authentication (see:
 * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html)
 */
export declare const awsRdsIamAuth: boolean | undefined;
Object.defineProperty(exports, "awsRdsIamAuth", {
    get() {
        return __config.getObject<boolean>("awsRdsIamAuth");
    },
    enumerable: true,
});

/**
 * AWS profile to use for IAM auth
 */
export declare const awsRdsIamProfile: string | undefined;
Object.defineProperty(exports, "awsRdsIamProfile", {
    get() {
        return __config.get("awsRdsIamProfile");
    },
    enumerable: true,
});

/**
 * AWS region to use for IAM auth
 */
export declare const awsRdsIamRegion: string | undefined;
Object.defineProperty(exports, "awsRdsIamRegion", {
    get() {
        return __config.get("awsRdsIamRegion");
    },
    enumerable: true,
});

/**
 * Use MS Azure identity OAuth token (see:
 * https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/how-to-configure-sign-in-azure-ad-authentication)
 */
export declare const azureIdentityAuth: boolean | undefined;
Object.defineProperty(exports, "azureIdentityAuth", {
    get() {
        return __config.getObject<boolean>("azureIdentityAuth");
    },
    enumerable: true,
});

export declare const azureTenantId: string | undefined;
Object.defineProperty(exports, "azureTenantId", {
    get() {
        return __config.get("azureTenantId");
    },
    enumerable: true,
});

/**
 * SSL client certificate if required by the database.
 */
export declare const clientcert: outputs.config.Clientcert | undefined;
Object.defineProperty(exports, "clientcert", {
    get() {
        return __config.getObject<outputs.config.Clientcert>("clientcert");
    },
    enumerable: true,
});

/**
 * Maximum wait for connection, in seconds. Zero or not specified means wait indefinitely.
 */
export declare const connectTimeout: number | undefined;
Object.defineProperty(exports, "connectTimeout", {
    get() {
        return __config.getObject<number>("connectTimeout");
    },
    enumerable: true,
});

/**
 * The name of the database to connect to in order to conenct to (defaults to `postgres`).
 */
export declare const database: string | undefined;
Object.defineProperty(exports, "database", {
    get() {
        return __config.get("database");
    },
    enumerable: true,
});

/**
 * Database username associated to the connected user (for user name maps)
 */
export declare const databaseUsername: string | undefined;
Object.defineProperty(exports, "databaseUsername", {
    get() {
        return __config.get("databaseUsername");
    },
    enumerable: true,
});

/**
 * Specify the expected version of PostgreSQL.
 */
export declare const expectedVersion: string | undefined;
Object.defineProperty(exports, "expectedVersion", {
    get() {
        return __config.get("expectedVersion");
    },
    enumerable: true,
});

/**
 * Name of PostgreSQL server address to connect to
 */
export declare const host: string | undefined;
Object.defineProperty(exports, "host", {
    get() {
        return __config.get("host");
    },
    enumerable: true,
});

/**
 * Maximum number of connections to establish to the database. Zero means unlimited.
 */
export declare const maxConnections: number | undefined;
Object.defineProperty(exports, "maxConnections", {
    get() {
        return __config.getObject<number>("maxConnections");
    },
    enumerable: true,
});

/**
 * Password to be used if the PostgreSQL server demands password authentication
 */
export declare const password: string | undefined;
Object.defineProperty(exports, "password", {
    get() {
        return __config.get("password");
    },
    enumerable: true,
});

/**
 * The PostgreSQL port number to connect to at the server host, or socket file name extension for Unix-domain connections
 */
export declare const port: number | undefined;
Object.defineProperty(exports, "port", {
    get() {
        return __config.getObject<number>("port");
    },
    enumerable: true,
});

export declare const scheme: string | undefined;
Object.defineProperty(exports, "scheme", {
    get() {
        return __config.get("scheme");
    },
    enumerable: true,
});

export declare const sslMode: string | undefined;
Object.defineProperty(exports, "sslMode", {
    get() {
        return __config.get("sslMode");
    },
    enumerable: true,
});

/**
 * This option determines whether or with what priority a secure SSL TCP/IP connection will be negotiated with the
 * PostgreSQL server
 */
export declare const sslmode: string | undefined;
Object.defineProperty(exports, "sslmode", {
    get() {
        return __config.get("sslmode");
    },
    enumerable: true,
});

/**
 * The SSL server root certificate file path. The file must contain PEM encoded data.
 */
export declare const sslrootcert: string | undefined;
Object.defineProperty(exports, "sslrootcert", {
    get() {
        return __config.get("sslrootcert");
    },
    enumerable: true,
});

/**
 * Specify if the user to connect as is a Postgres superuser or not.If not, some feature might be disabled (e.g.:
 * Refreshing state password from Postgres)
 */
export declare const superuser: boolean | undefined;
Object.defineProperty(exports, "superuser", {
    get() {
        return __config.getObject<boolean>("superuser");
    },
    enumerable: true,
});

/**
 * PostgreSQL user name to connect as
 */
export declare const username: string | undefined;
Object.defineProperty(exports, "username", {
    get() {
        return __config.get("username");
    },
    enumerable: true,
});

