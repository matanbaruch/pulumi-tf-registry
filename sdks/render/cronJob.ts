// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CronJob extends pulumi.CustomResource {
    /**
     * Get an existing CronJob resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CronJobState, opts?: pulumi.CustomResourceOptions): CronJob {
        return new CronJob(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'render:index/cronJob:CronJob';

    /**
     * Returns true if the given object is an instance of CronJob.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CronJob {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CronJob.__pulumiType;
    }

    /**
     * Map of environment variable names to their values.
     */
    public readonly envVars!: pulumi.Output<{[key: string]: outputs.CronJobEnvVars} | undefined>;
    /**
     * ID of the [project environment](https://docs.render.com/projects) that the resource belongs to
     */
    public readonly environmentId!: pulumi.Output<string | undefined>;
    /**
     * Name of the service
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Configure the [notification settings](https://docs.render.com/notifications) for this service. These will override the
     * global notification settings of the user or team.
     */
    public readonly notificationOverride!: pulumi.Output<outputs.CronJobNotificationOverride>;
    /**
     * Plan to use for the service. Must be one of `starter`, `standard`, `pro`, `pro_plus`, `pro_max`, `pro_ultra`, or a
     * custom plan.
     */
    public readonly plan!: pulumi.Output<string>;
    /**
     * [Region](https://docs.render.com/regions) to deploy the service. One of `frankfurt`, `ohio`, `oregon`, `singapore`,
     * `virginia`.
     */
    public readonly region!: pulumi.Output<string>;
    /**
     * When you specify a [root directory](https://docs.render.com/monorepo-support#root-directory), Render runs all your
     * commands in the specified directory and ignores changes outside the directory. Defaults to the repository root.
     */
    public readonly rootDirectory!: pulumi.Output<string>;
    /**
     * Source of the build artifacts or image that run your service. You must provide one of
     * [native_runtime](https://docs.render.com/native-runtimes), [docker](https://docs.render.com/docker), or
     * [image](https://docs.render.com/deploy-an-image).
     */
    public readonly runtimeSource!: pulumi.Output<outputs.CronJobRuntimeSource>;
    /**
     * Cron schedule to run the job
     */
    public readonly schedule!: pulumi.Output<string>;
    /**
     * A map of secret file paths to their contents.
     */
    public readonly secretFiles!: pulumi.Output<{[key: string]: outputs.CronJobSecretFiles} | undefined>;
    /**
     * Unique slug for the service
     */
    public /*out*/ readonly slug!: pulumi.Output<string>;
    /**
     * Command to run the service. When using native runtimes, this will be used as the start command and is required. For
     * [Docker](https://docs.render.com/docker) and [image-backed](https://docs.render.com/deploy-an-image) services, this will
     * override the default Docker command for the image.
     */
    public readonly startCommand!: pulumi.Output<string | undefined>;

    /**
     * Create a CronJob resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CronJobArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CronJobArgs | CronJobState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CronJobState | undefined;
            resourceInputs["envVars"] = state ? state.envVars : undefined;
            resourceInputs["environmentId"] = state ? state.environmentId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["notificationOverride"] = state ? state.notificationOverride : undefined;
            resourceInputs["plan"] = state ? state.plan : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["rootDirectory"] = state ? state.rootDirectory : undefined;
            resourceInputs["runtimeSource"] = state ? state.runtimeSource : undefined;
            resourceInputs["schedule"] = state ? state.schedule : undefined;
            resourceInputs["secretFiles"] = state ? state.secretFiles : undefined;
            resourceInputs["slug"] = state ? state.slug : undefined;
            resourceInputs["startCommand"] = state ? state.startCommand : undefined;
        } else {
            const args = argsOrState as CronJobArgs | undefined;
            if ((!args || args.plan === undefined) && !opts.urn) {
                throw new Error("Missing required property 'plan'");
            }
            if ((!args || args.region === undefined) && !opts.urn) {
                throw new Error("Missing required property 'region'");
            }
            if ((!args || args.runtimeSource === undefined) && !opts.urn) {
                throw new Error("Missing required property 'runtimeSource'");
            }
            if ((!args || args.schedule === undefined) && !opts.urn) {
                throw new Error("Missing required property 'schedule'");
            }
            resourceInputs["envVars"] = args ? args.envVars : undefined;
            resourceInputs["environmentId"] = args ? args.environmentId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["notificationOverride"] = args ? args.notificationOverride : undefined;
            resourceInputs["plan"] = args ? args.plan : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["rootDirectory"] = args ? args.rootDirectory : undefined;
            resourceInputs["runtimeSource"] = args ? args.runtimeSource : undefined;
            resourceInputs["schedule"] = args ? args.schedule : undefined;
            resourceInputs["secretFiles"] = args ? args.secretFiles : undefined;
            resourceInputs["startCommand"] = args ? args.startCommand : undefined;
            resourceInputs["slug"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CronJob.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CronJob resources.
 */
export interface CronJobState {
    /**
     * Map of environment variable names to their values.
     */
    envVars?: pulumi.Input<{[key: string]: pulumi.Input<inputs.CronJobEnvVars>}>;
    /**
     * ID of the [project environment](https://docs.render.com/projects) that the resource belongs to
     */
    environmentId?: pulumi.Input<string>;
    /**
     * Name of the service
     */
    name?: pulumi.Input<string>;
    /**
     * Configure the [notification settings](https://docs.render.com/notifications) for this service. These will override the
     * global notification settings of the user or team.
     */
    notificationOverride?: pulumi.Input<inputs.CronJobNotificationOverride>;
    /**
     * Plan to use for the service. Must be one of `starter`, `standard`, `pro`, `pro_plus`, `pro_max`, `pro_ultra`, or a
     * custom plan.
     */
    plan?: pulumi.Input<string>;
    /**
     * [Region](https://docs.render.com/regions) to deploy the service. One of `frankfurt`, `ohio`, `oregon`, `singapore`,
     * `virginia`.
     */
    region?: pulumi.Input<string>;
    /**
     * When you specify a [root directory](https://docs.render.com/monorepo-support#root-directory), Render runs all your
     * commands in the specified directory and ignores changes outside the directory. Defaults to the repository root.
     */
    rootDirectory?: pulumi.Input<string>;
    /**
     * Source of the build artifacts or image that run your service. You must provide one of
     * [native_runtime](https://docs.render.com/native-runtimes), [docker](https://docs.render.com/docker), or
     * [image](https://docs.render.com/deploy-an-image).
     */
    runtimeSource?: pulumi.Input<inputs.CronJobRuntimeSource>;
    /**
     * Cron schedule to run the job
     */
    schedule?: pulumi.Input<string>;
    /**
     * A map of secret file paths to their contents.
     */
    secretFiles?: pulumi.Input<{[key: string]: pulumi.Input<inputs.CronJobSecretFiles>}>;
    /**
     * Unique slug for the service
     */
    slug?: pulumi.Input<string>;
    /**
     * Command to run the service. When using native runtimes, this will be used as the start command and is required. For
     * [Docker](https://docs.render.com/docker) and [image-backed](https://docs.render.com/deploy-an-image) services, this will
     * override the default Docker command for the image.
     */
    startCommand?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CronJob resource.
 */
export interface CronJobArgs {
    /**
     * Map of environment variable names to their values.
     */
    envVars?: pulumi.Input<{[key: string]: pulumi.Input<inputs.CronJobEnvVars>}>;
    /**
     * ID of the [project environment](https://docs.render.com/projects) that the resource belongs to
     */
    environmentId?: pulumi.Input<string>;
    /**
     * Name of the service
     */
    name?: pulumi.Input<string>;
    /**
     * Configure the [notification settings](https://docs.render.com/notifications) for this service. These will override the
     * global notification settings of the user or team.
     */
    notificationOverride?: pulumi.Input<inputs.CronJobNotificationOverride>;
    /**
     * Plan to use for the service. Must be one of `starter`, `standard`, `pro`, `pro_plus`, `pro_max`, `pro_ultra`, or a
     * custom plan.
     */
    plan: pulumi.Input<string>;
    /**
     * [Region](https://docs.render.com/regions) to deploy the service. One of `frankfurt`, `ohio`, `oregon`, `singapore`,
     * `virginia`.
     */
    region: pulumi.Input<string>;
    /**
     * When you specify a [root directory](https://docs.render.com/monorepo-support#root-directory), Render runs all your
     * commands in the specified directory and ignores changes outside the directory. Defaults to the repository root.
     */
    rootDirectory?: pulumi.Input<string>;
    /**
     * Source of the build artifacts or image that run your service. You must provide one of
     * [native_runtime](https://docs.render.com/native-runtimes), [docker](https://docs.render.com/docker), or
     * [image](https://docs.render.com/deploy-an-image).
     */
    runtimeSource: pulumi.Input<inputs.CronJobRuntimeSource>;
    /**
     * Cron schedule to run the job
     */
    schedule: pulumi.Input<string>;
    /**
     * A map of secret file paths to their contents.
     */
    secretFiles?: pulumi.Input<{[key: string]: pulumi.Input<inputs.CronJobSecretFiles>}>;
    /**
     * Command to run the service. When using native runtimes, this will be used as the start command and is required. For
     * [Docker](https://docs.render.com/docker) and [image-backed](https://docs.render.com/deploy-an-image) services, this will
     * override the default Docker command for the image.
     */
    startCommand?: pulumi.Input<string>;
}
