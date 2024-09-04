// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class E5eFunction extends pulumi.CustomResource {
    /**
     * Get an existing E5eFunction resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: E5eFunctionState, opts?: pulumi.CustomResourceOptions): E5eFunction {
        return new E5eFunction(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'anxcloud:index/e5eFunction:E5eFunction';

    /**
     * Returns true if the given object is an instance of E5eFunction.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is E5eFunction {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === E5eFunction.__pulumiType;
    }

    /**
     * Functions application assignment.
     */
    public readonly application!: pulumi.Output<string>;
    /**
     * Function entrypoint.
     */
    public readonly entrypoint!: pulumi.Output<string>;
    /**
     * Environment variables available to the function. Note: the provider is not aware of external changes to secret
     * environment variables.
     */
    public readonly envs!: pulumi.Output<outputs.E5eFunctionEnv[] | undefined>;
    /**
     * Custom host entries that are available when running your function. These hostnames can override existing DNS entries.
     */
    public readonly hostnames!: pulumi.Output<outputs.E5eFunctionHostname[] | undefined>;
    /**
     * Keep-alive time.
     */
    public readonly keepAlive!: pulumi.Output<number>;
    /**
     * Function name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Number of parallel executions of the function there can be.
     */
    public readonly quotaConcurrency!: pulumi.Output<number>;
    /**
     * CPU time in percent the e5e platform will grant your function on execution.
     */
    public readonly quotaCpu!: pulumi.Output<number>;
    /**
     * Memory in MiB e5e will grant your function.
     */
    public readonly quotaMemory!: pulumi.Output<number>;
    /**
     * Space in MiB e5e will grant your function to write any sort of files.
     */
    public readonly quotaStorage!: pulumi.Output<number>;
    /**
     * Time in seconds your function can take to execute before it is killed by the e5e platform.
     */
    public readonly quotaTimeout!: pulumi.Output<number>;
    /**
     * Revision is an optional attribute which can be used to trigger a new deployment. The value can be any arbitrary string
     * (e.g. `COMMIT_SHA` or md5 hash of the code binary passed in via variables).
     */
    public readonly revision!: pulumi.Output<string | undefined>;
    /**
     * Function runtime.
     */
    public readonly runtime!: pulumi.Output<string>;
    /**
     * Archive storage backend configuration.
     */
    public readonly storageBackendArchive!: pulumi.Output<outputs.E5eFunctionStorageBackendArchive | undefined>;
    /**
     * Git storage backend configuration.
     */
    public readonly storageBackendGit!: pulumi.Output<outputs.E5eFunctionStorageBackendGit | undefined>;
    /**
     * S3 storage backend configuration.
     */
    public readonly storageBackendS3!: pulumi.Output<outputs.E5eFunctionStorageBackendS3 | undefined>;
    public readonly workerType!: pulumi.Output<string>;

    /**
     * Create a E5eFunction resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: E5eFunctionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: E5eFunctionArgs | E5eFunctionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as E5eFunctionState | undefined;
            resourceInputs["application"] = state ? state.application : undefined;
            resourceInputs["entrypoint"] = state ? state.entrypoint : undefined;
            resourceInputs["envs"] = state ? state.envs : undefined;
            resourceInputs["hostnames"] = state ? state.hostnames : undefined;
            resourceInputs["keepAlive"] = state ? state.keepAlive : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["quotaConcurrency"] = state ? state.quotaConcurrency : undefined;
            resourceInputs["quotaCpu"] = state ? state.quotaCpu : undefined;
            resourceInputs["quotaMemory"] = state ? state.quotaMemory : undefined;
            resourceInputs["quotaStorage"] = state ? state.quotaStorage : undefined;
            resourceInputs["quotaTimeout"] = state ? state.quotaTimeout : undefined;
            resourceInputs["revision"] = state ? state.revision : undefined;
            resourceInputs["runtime"] = state ? state.runtime : undefined;
            resourceInputs["storageBackendArchive"] = state ? state.storageBackendArchive : undefined;
            resourceInputs["storageBackendGit"] = state ? state.storageBackendGit : undefined;
            resourceInputs["storageBackendS3"] = state ? state.storageBackendS3 : undefined;
            resourceInputs["workerType"] = state ? state.workerType : undefined;
        } else {
            const args = argsOrState as E5eFunctionArgs | undefined;
            if ((!args || args.application === undefined) && !opts.urn) {
                throw new Error("Missing required property 'application'");
            }
            if ((!args || args.entrypoint === undefined) && !opts.urn) {
                throw new Error("Missing required property 'entrypoint'");
            }
            if ((!args || args.runtime === undefined) && !opts.urn) {
                throw new Error("Missing required property 'runtime'");
            }
            resourceInputs["application"] = args ? args.application : undefined;
            resourceInputs["entrypoint"] = args ? args.entrypoint : undefined;
            resourceInputs["envs"] = args ? args.envs : undefined;
            resourceInputs["hostnames"] = args ? args.hostnames : undefined;
            resourceInputs["keepAlive"] = args ? args.keepAlive : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["quotaConcurrency"] = args ? args.quotaConcurrency : undefined;
            resourceInputs["quotaCpu"] = args ? args.quotaCpu : undefined;
            resourceInputs["quotaMemory"] = args ? args.quotaMemory : undefined;
            resourceInputs["quotaStorage"] = args ? args.quotaStorage : undefined;
            resourceInputs["quotaTimeout"] = args ? args.quotaTimeout : undefined;
            resourceInputs["revision"] = args ? args.revision : undefined;
            resourceInputs["runtime"] = args ? args.runtime : undefined;
            resourceInputs["storageBackendArchive"] = args ? args.storageBackendArchive : undefined;
            resourceInputs["storageBackendGit"] = args ? args.storageBackendGit : undefined;
            resourceInputs["storageBackendS3"] = args ? args.storageBackendS3 : undefined;
            resourceInputs["workerType"] = args ? args.workerType : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(E5eFunction.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering E5eFunction resources.
 */
export interface E5eFunctionState {
    /**
     * Functions application assignment.
     */
    application?: pulumi.Input<string>;
    /**
     * Function entrypoint.
     */
    entrypoint?: pulumi.Input<string>;
    /**
     * Environment variables available to the function. Note: the provider is not aware of external changes to secret
     * environment variables.
     */
    envs?: pulumi.Input<pulumi.Input<inputs.E5eFunctionEnv>[]>;
    /**
     * Custom host entries that are available when running your function. These hostnames can override existing DNS entries.
     */
    hostnames?: pulumi.Input<pulumi.Input<inputs.E5eFunctionHostname>[]>;
    /**
     * Keep-alive time.
     */
    keepAlive?: pulumi.Input<number>;
    /**
     * Function name.
     */
    name?: pulumi.Input<string>;
    /**
     * Number of parallel executions of the function there can be.
     */
    quotaConcurrency?: pulumi.Input<number>;
    /**
     * CPU time in percent the e5e platform will grant your function on execution.
     */
    quotaCpu?: pulumi.Input<number>;
    /**
     * Memory in MiB e5e will grant your function.
     */
    quotaMemory?: pulumi.Input<number>;
    /**
     * Space in MiB e5e will grant your function to write any sort of files.
     */
    quotaStorage?: pulumi.Input<number>;
    /**
     * Time in seconds your function can take to execute before it is killed by the e5e platform.
     */
    quotaTimeout?: pulumi.Input<number>;
    /**
     * Revision is an optional attribute which can be used to trigger a new deployment. The value can be any arbitrary string
     * (e.g. `COMMIT_SHA` or md5 hash of the code binary passed in via variables).
     */
    revision?: pulumi.Input<string>;
    /**
     * Function runtime.
     */
    runtime?: pulumi.Input<string>;
    /**
     * Archive storage backend configuration.
     */
    storageBackendArchive?: pulumi.Input<inputs.E5eFunctionStorageBackendArchive>;
    /**
     * Git storage backend configuration.
     */
    storageBackendGit?: pulumi.Input<inputs.E5eFunctionStorageBackendGit>;
    /**
     * S3 storage backend configuration.
     */
    storageBackendS3?: pulumi.Input<inputs.E5eFunctionStorageBackendS3>;
    workerType?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a E5eFunction resource.
 */
export interface E5eFunctionArgs {
    /**
     * Functions application assignment.
     */
    application: pulumi.Input<string>;
    /**
     * Function entrypoint.
     */
    entrypoint: pulumi.Input<string>;
    /**
     * Environment variables available to the function. Note: the provider is not aware of external changes to secret
     * environment variables.
     */
    envs?: pulumi.Input<pulumi.Input<inputs.E5eFunctionEnv>[]>;
    /**
     * Custom host entries that are available when running your function. These hostnames can override existing DNS entries.
     */
    hostnames?: pulumi.Input<pulumi.Input<inputs.E5eFunctionHostname>[]>;
    /**
     * Keep-alive time.
     */
    keepAlive?: pulumi.Input<number>;
    /**
     * Function name.
     */
    name?: pulumi.Input<string>;
    /**
     * Number of parallel executions of the function there can be.
     */
    quotaConcurrency?: pulumi.Input<number>;
    /**
     * CPU time in percent the e5e platform will grant your function on execution.
     */
    quotaCpu?: pulumi.Input<number>;
    /**
     * Memory in MiB e5e will grant your function.
     */
    quotaMemory?: pulumi.Input<number>;
    /**
     * Space in MiB e5e will grant your function to write any sort of files.
     */
    quotaStorage?: pulumi.Input<number>;
    /**
     * Time in seconds your function can take to execute before it is killed by the e5e platform.
     */
    quotaTimeout?: pulumi.Input<number>;
    /**
     * Revision is an optional attribute which can be used to trigger a new deployment. The value can be any arbitrary string
     * (e.g. `COMMIT_SHA` or md5 hash of the code binary passed in via variables).
     */
    revision?: pulumi.Input<string>;
    /**
     * Function runtime.
     */
    runtime: pulumi.Input<string>;
    /**
     * Archive storage backend configuration.
     */
    storageBackendArchive?: pulumi.Input<inputs.E5eFunctionStorageBackendArchive>;
    /**
     * Git storage backend configuration.
     */
    storageBackendGit?: pulumi.Input<inputs.E5eFunctionStorageBackendGit>;
    /**
     * S3 storage backend configuration.
     */
    storageBackendS3?: pulumi.Input<inputs.E5eFunctionStorageBackendS3>;
    workerType?: pulumi.Input<string>;
}
