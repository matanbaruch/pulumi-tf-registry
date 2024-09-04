// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

declare var exports: any;
const __config = new pulumi.Config("ko");

/**
 * [DEPRECATED: use `repo`] Container repository to publish images to. Defaults to `KO_DOCKER_REPO` env var
 */
export declare const dockerRepo: string | undefined;
Object.defineProperty(exports, "dockerRepo", {
    get() {
        return __config.get("dockerRepo");
    },
    enumerable: true,
});

/**
 * Container repository to publish images to. Defaults to `KO_DOCKER_REPO` env var
 */
export declare const repo: string | undefined;
Object.defineProperty(exports, "repo", {
    get() {
        return __config.get("repo");
    },
    enumerable: true,
});

