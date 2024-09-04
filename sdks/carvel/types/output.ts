// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface KappDelete {
    /**
     * Raw options given to kapp
     */
    rawOptions?: string[];
}

export interface KappDeploy {
    /**
     * Raw options given to kapp
     */
    rawOptions?: string[];
}

export namespace config {
    export interface Kapp {
        /**
         * Generate diff and write them to a file
         */
        diffOutputFile?: string;
        kubeconfig?: outputs.config.KappKubeconfig;
        /**
         * kubeconfig as YAML
         */
        kubeconfigYaml?: string;
    }

    export interface KappKubeconfig {
        /**
         * CA certificate in PEM format
         */
        caCert?: string;
        /**
         * Client certificate in PEM format
         */
        clientCert?: string;
        /**
         * Client key in PEM format
         */
        clientKey?: string;
        /**
         * Use particular context
         */
        context?: string;
        /**
         * Pull configuration from environment (typically found in ~/.kube/config or via $KUBECONFIG)
         */
        fromEnv?: boolean;
        /**
         * Password
         */
        password?: string;
        /**
         * Address of API server
         */
        server?: string;
        /**
         * Auth token
         */
        token?: string;
        /**
         * Username
         */
        username?: string;
    }

}
