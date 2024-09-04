// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

// Export members:
export { ApplicationKeyArgs, ApplicationKeyState } from "./applicationKey";
export type ApplicationKey = import("./applicationKey").ApplicationKey;
export const ApplicationKey: typeof import("./applicationKey").ApplicationKey = null as any;
utilities.lazyLoad(exports, ["ApplicationKey"], () => require("./applicationKey"));

export { BucketArgs, BucketState } from "./bucket";
export type Bucket = import("./bucket").Bucket;
export const Bucket: typeof import("./bucket").Bucket = null as any;
utilities.lazyLoad(exports, ["Bucket"], () => require("./bucket"));

export { BucketFileVersionArgs, BucketFileVersionState } from "./bucketFileVersion";
export type BucketFileVersion = import("./bucketFileVersion").BucketFileVersion;
export const BucketFileVersion: typeof import("./bucketFileVersion").BucketFileVersion = null as any;
utilities.lazyLoad(exports, ["BucketFileVersion"], () => require("./bucketFileVersion"));

export { GetAccountInfoArgs, GetAccountInfoResult, GetAccountInfoOutputArgs } from "./getAccountInfo";
export const getAccountInfo: typeof import("./getAccountInfo").getAccountInfo = null as any;
export const getAccountInfoOutput: typeof import("./getAccountInfo").getAccountInfoOutput = null as any;
utilities.lazyLoad(exports, ["getAccountInfo","getAccountInfoOutput"], () => require("./getAccountInfo"));

export { GetApplicationKeyArgs, GetApplicationKeyResult, GetApplicationKeyOutputArgs } from "./getApplicationKey";
export const getApplicationKey: typeof import("./getApplicationKey").getApplicationKey = null as any;
export const getApplicationKeyOutput: typeof import("./getApplicationKey").getApplicationKeyOutput = null as any;
utilities.lazyLoad(exports, ["getApplicationKey","getApplicationKeyOutput"], () => require("./getApplicationKey"));

export { GetBucketArgs, GetBucketResult, GetBucketOutputArgs } from "./getBucket";
export const getBucket: typeof import("./getBucket").getBucket = null as any;
export const getBucketOutput: typeof import("./getBucket").getBucketOutput = null as any;
utilities.lazyLoad(exports, ["getBucket","getBucketOutput"], () => require("./getBucket"));

export { GetBucketFileArgs, GetBucketFileResult, GetBucketFileOutputArgs } from "./getBucketFile";
export const getBucketFile: typeof import("./getBucketFile").getBucketFile = null as any;
export const getBucketFileOutput: typeof import("./getBucketFile").getBucketFileOutput = null as any;
utilities.lazyLoad(exports, ["getBucketFile","getBucketFileOutput"], () => require("./getBucketFile"));

export { GetBucketFileSignedUrlArgs, GetBucketFileSignedUrlResult, GetBucketFileSignedUrlOutputArgs } from "./getBucketFileSignedUrl";
export const getBucketFileSignedUrl: typeof import("./getBucketFileSignedUrl").getBucketFileSignedUrl = null as any;
export const getBucketFileSignedUrlOutput: typeof import("./getBucketFileSignedUrl").getBucketFileSignedUrlOutput = null as any;
utilities.lazyLoad(exports, ["getBucketFileSignedUrl","getBucketFileSignedUrlOutput"], () => require("./getBucketFileSignedUrl"));

export { GetBucketFilesArgs, GetBucketFilesResult, GetBucketFilesOutputArgs } from "./getBucketFiles";
export const getBucketFiles: typeof import("./getBucketFiles").getBucketFiles = null as any;
export const getBucketFilesOutput: typeof import("./getBucketFiles").getBucketFilesOutput = null as any;
utilities.lazyLoad(exports, ["getBucketFiles","getBucketFilesOutput"], () => require("./getBucketFiles"));

export { ProviderArgs } from "./provider";
export type Provider = import("./provider").Provider;
export const Provider: typeof import("./provider").Provider = null as any;
utilities.lazyLoad(exports, ["Provider"], () => require("./provider"));


// Export sub-modules:
import * as config from "./config";
import * as types from "./types";

export {
    config,
    types,
};

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "b2:index/applicationKey:ApplicationKey":
                return new ApplicationKey(name, <any>undefined, { urn })
            case "b2:index/bucket:Bucket":
                return new Bucket(name, <any>undefined, { urn })
            case "b2:index/bucketFileVersion:BucketFileVersion":
                return new BucketFileVersion(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("b2", "index/applicationKey", _module)
pulumi.runtime.registerResourceModule("b2", "index/bucket", _module)
pulumi.runtime.registerResourceModule("b2", "index/bucketFileVersion", _module)
pulumi.runtime.registerResourcePackage("b2", {
    version: utilities.getVersion(),
    constructProvider: (name: string, type: string, urn: string): pulumi.ProviderResource => {
        if (type !== "pulumi:providers:b2") {
            throw new Error(`unknown provider type ${type}`);
        }
        return new Provider(name, <any>undefined, { urn });
    },
});
