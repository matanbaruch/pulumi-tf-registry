// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

declare var exports: any;
const __config = new pulumi.Config("tfmigrate");

export declare const githubToken: string | undefined;
Object.defineProperty(exports, "githubToken", {
    get() {
        return __config.get("githubToken");
    },
    enumerable: true,
});

