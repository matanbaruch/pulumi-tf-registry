// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface CertRequestSubject {
    /**
     * Distinguished name: `CN`
     */
    commonName?: string;
    /**
     * Distinguished name: `C`
     */
    country?: string;
    /**
     * Distinguished name: `L`
     */
    locality?: string;
    /**
     * Distinguished name: `O`
     */
    organization?: string;
    /**
     * Distinguished name: `OU`
     */
    organizationalUnit?: string;
    /**
     * Distinguished name: `PC`
     */
    postalCode?: string;
    /**
     * Distinguished name: `ST`
     */
    province?: string;
    /**
     * Distinguished name: `SERIALNUMBER`
     */
    serialNumber?: string;
    /**
     * Distinguished name: `STREET`
     */
    streetAddresses?: string[];
}

export interface GetCertificateCertificate {
    certPem: string;
    isCa: boolean;
    issuer: string;
    notAfter: string;
    notBefore: string;
    publicKeyAlgorithm: string;
    serialNumber: string;
    sha1Fingerprint: string;
    signatureAlgorithm: string;
    subject: string;
    version: number;
}

export interface SelfSignedCertSubject {
    /**
     * Distinguished name: `CN`
     */
    commonName?: string;
    /**
     * Distinguished name: `C`
     */
    country?: string;
    /**
     * Distinguished name: `L`
     */
    locality?: string;
    /**
     * Distinguished name: `O`
     */
    organization?: string;
    /**
     * Distinguished name: `OU`
     */
    organizationalUnit?: string;
    /**
     * Distinguished name: `PC`
     */
    postalCode?: string;
    /**
     * Distinguished name: `ST`
     */
    province?: string;
    /**
     * Distinguished name: `SERIALNUMBER`
     */
    serialNumber?: string;
    /**
     * Distinguished name: `STREET`
     */
    streetAddresses?: string[];
}

export namespace config {
    export interface Proxies {
        /**
         * When `true` the provider will discover the proxy configuration from environment variables. This is based upon [`http.ProxyFromEnvironment`](https://pkg.go.dev/net/http#ProxyFromEnvironment) and it supports the same environment variables (default: `true`).
         */
        fromEnv?: boolean;
        /**
         * Password used for Basic authentication against the Proxy.
         */
        password?: string;
        /**
         * URL used to connect to the Proxy. Accepted schemes are: `http`, `https`, `socks5`.
         */
        url?: string;
        /**
         * Username (or Token) used for Basic authentication against the Proxy.
         */
        username?: string;
    }

}
