// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CheckGroup extends pulumi.CustomResource {
    /**
     * Get an existing CheckGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CheckGroupState, opts?: pulumi.CustomResourceOptions): CheckGroup {
        return new CheckGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'checkly:index/checkGroup:CheckGroup';

    /**
     * Returns true if the given object is an instance of CheckGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CheckGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CheckGroup.__pulumiType;
    }

    /**
     * Determines if the checks in the group are running or not.
     */
    public readonly activated!: pulumi.Output<boolean>;
    public readonly alertChannelSubscriptions!: pulumi.Output<outputs.CheckGroupAlertChannelSubscription[] | undefined>;
    public readonly alertSettings!: pulumi.Output<outputs.CheckGroupAlertSettings | undefined>;
    public readonly apiCheckDefaults!: pulumi.Output<outputs.CheckGroupApiCheckDefaults | undefined>;
    /**
     * Determines how many checks are run concurrently when triggering a check group from CI/CD or through the API.
     */
    public readonly concurrency!: pulumi.Output<number>;
    /**
     * Setting this to `true` will trigger a retry when a check fails from the failing region and another, randomly selected
     * region before marking the check as failed.
     *
     * @deprecated Deprecated
     */
    public readonly doubleCheck!: pulumi.Output<boolean | undefined>;
    /**
     * Key/value pairs for setting environment variables during check execution, add locked = true to keep value hidden, add
     * secret = true to create a secret variable. These are only relevant for browser checks. Use global environment variables
     * whenever possible.
     */
    public readonly environmentVariable!: pulumi.Output<outputs.CheckGroupEnvironmentVariable[] | undefined>;
    /**
     * Key/value pairs for setting environment variables during check execution. These are only relevant for browser checks.
     * Use global environment variables whenever possible.
     *
     * @deprecated Deprecated
     */
    public readonly environmentVariables!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * A valid piece of Node.js code to run in the setup phase of an API check in this group.
     */
    public readonly localSetupScript!: pulumi.Output<string | undefined>;
    /**
     * A valid piece of Node.js code to run in the teardown phase of an API check in this group.
     */
    public readonly localTeardownScript!: pulumi.Output<string | undefined>;
    /**
     * An array of one or more data center locations where to run the checks.
     */
    public readonly locations!: pulumi.Output<string[] | undefined>;
    /**
     * Determines if any notifications will be sent out when a check in this group fails and/or recovers.
     */
    public readonly muted!: pulumi.Output<boolean | undefined>;
    /**
     * The name of the check group.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * An array of one or more private locations slugs.
     */
    public readonly privateLocations!: pulumi.Output<string[] | undefined>;
    /**
     * A strategy for retrying failed check runs.
     */
    public readonly retryStrategy!: pulumi.Output<outputs.CheckGroupRetryStrategy | undefined>;
    /**
     * Determines if the checks in the group should run in all selected locations in parallel or round-robin.
     */
    public readonly runParallel!: pulumi.Output<boolean | undefined>;
    /**
     * The id of the runtime to use for this group.
     */
    public readonly runtimeId!: pulumi.Output<string | undefined>;
    /**
     * An ID reference to a snippet to use in the setup phase of an API check.
     */
    public readonly setupSnippetId!: pulumi.Output<number | undefined>;
    /**
     * Tags for organizing and filtering checks.
     */
    public readonly tags!: pulumi.Output<string[] | undefined>;
    /**
     * An ID reference to a snippet to use in the teardown phase of an API check.
     */
    public readonly teardownSnippetId!: pulumi.Output<number | undefined>;
    /**
     * When true, the account level alert settings will be used, not the alert setting defined on this check group.
     */
    public readonly useGlobalAlertSettings!: pulumi.Output<boolean | undefined>;

    /**
     * Create a CheckGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CheckGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CheckGroupArgs | CheckGroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CheckGroupState | undefined;
            resourceInputs["activated"] = state ? state.activated : undefined;
            resourceInputs["alertChannelSubscriptions"] = state ? state.alertChannelSubscriptions : undefined;
            resourceInputs["alertSettings"] = state ? state.alertSettings : undefined;
            resourceInputs["apiCheckDefaults"] = state ? state.apiCheckDefaults : undefined;
            resourceInputs["concurrency"] = state ? state.concurrency : undefined;
            resourceInputs["doubleCheck"] = state ? state.doubleCheck : undefined;
            resourceInputs["environmentVariable"] = state ? state.environmentVariable : undefined;
            resourceInputs["environmentVariables"] = state ? state.environmentVariables : undefined;
            resourceInputs["localSetupScript"] = state ? state.localSetupScript : undefined;
            resourceInputs["localTeardownScript"] = state ? state.localTeardownScript : undefined;
            resourceInputs["locations"] = state ? state.locations : undefined;
            resourceInputs["muted"] = state ? state.muted : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["privateLocations"] = state ? state.privateLocations : undefined;
            resourceInputs["retryStrategy"] = state ? state.retryStrategy : undefined;
            resourceInputs["runParallel"] = state ? state.runParallel : undefined;
            resourceInputs["runtimeId"] = state ? state.runtimeId : undefined;
            resourceInputs["setupSnippetId"] = state ? state.setupSnippetId : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["teardownSnippetId"] = state ? state.teardownSnippetId : undefined;
            resourceInputs["useGlobalAlertSettings"] = state ? state.useGlobalAlertSettings : undefined;
        } else {
            const args = argsOrState as CheckGroupArgs | undefined;
            if ((!args || args.activated === undefined) && !opts.urn) {
                throw new Error("Missing required property 'activated'");
            }
            if ((!args || args.concurrency === undefined) && !opts.urn) {
                throw new Error("Missing required property 'concurrency'");
            }
            resourceInputs["activated"] = args ? args.activated : undefined;
            resourceInputs["alertChannelSubscriptions"] = args ? args.alertChannelSubscriptions : undefined;
            resourceInputs["alertSettings"] = args ? args.alertSettings : undefined;
            resourceInputs["apiCheckDefaults"] = args ? args.apiCheckDefaults : undefined;
            resourceInputs["concurrency"] = args ? args.concurrency : undefined;
            resourceInputs["doubleCheck"] = args ? args.doubleCheck : undefined;
            resourceInputs["environmentVariable"] = args ? args.environmentVariable : undefined;
            resourceInputs["environmentVariables"] = args ? args.environmentVariables : undefined;
            resourceInputs["localSetupScript"] = args ? args.localSetupScript : undefined;
            resourceInputs["localTeardownScript"] = args ? args.localTeardownScript : undefined;
            resourceInputs["locations"] = args ? args.locations : undefined;
            resourceInputs["muted"] = args ? args.muted : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["privateLocations"] = args ? args.privateLocations : undefined;
            resourceInputs["retryStrategy"] = args ? args.retryStrategy : undefined;
            resourceInputs["runParallel"] = args ? args.runParallel : undefined;
            resourceInputs["runtimeId"] = args ? args.runtimeId : undefined;
            resourceInputs["setupSnippetId"] = args ? args.setupSnippetId : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["teardownSnippetId"] = args ? args.teardownSnippetId : undefined;
            resourceInputs["useGlobalAlertSettings"] = args ? args.useGlobalAlertSettings : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CheckGroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CheckGroup resources.
 */
export interface CheckGroupState {
    /**
     * Determines if the checks in the group are running or not.
     */
    activated?: pulumi.Input<boolean>;
    alertChannelSubscriptions?: pulumi.Input<pulumi.Input<inputs.CheckGroupAlertChannelSubscription>[]>;
    alertSettings?: pulumi.Input<inputs.CheckGroupAlertSettings>;
    apiCheckDefaults?: pulumi.Input<inputs.CheckGroupApiCheckDefaults>;
    /**
     * Determines how many checks are run concurrently when triggering a check group from CI/CD or through the API.
     */
    concurrency?: pulumi.Input<number>;
    /**
     * Setting this to `true` will trigger a retry when a check fails from the failing region and another, randomly selected
     * region before marking the check as failed.
     *
     * @deprecated Deprecated
     */
    doubleCheck?: pulumi.Input<boolean>;
    /**
     * Key/value pairs for setting environment variables during check execution, add locked = true to keep value hidden, add
     * secret = true to create a secret variable. These are only relevant for browser checks. Use global environment variables
     * whenever possible.
     */
    environmentVariable?: pulumi.Input<pulumi.Input<inputs.CheckGroupEnvironmentVariable>[]>;
    /**
     * Key/value pairs for setting environment variables during check execution. These are only relevant for browser checks.
     * Use global environment variables whenever possible.
     *
     * @deprecated Deprecated
     */
    environmentVariables?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * A valid piece of Node.js code to run in the setup phase of an API check in this group.
     */
    localSetupScript?: pulumi.Input<string>;
    /**
     * A valid piece of Node.js code to run in the teardown phase of an API check in this group.
     */
    localTeardownScript?: pulumi.Input<string>;
    /**
     * An array of one or more data center locations where to run the checks.
     */
    locations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Determines if any notifications will be sent out when a check in this group fails and/or recovers.
     */
    muted?: pulumi.Input<boolean>;
    /**
     * The name of the check group.
     */
    name?: pulumi.Input<string>;
    /**
     * An array of one or more private locations slugs.
     */
    privateLocations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A strategy for retrying failed check runs.
     */
    retryStrategy?: pulumi.Input<inputs.CheckGroupRetryStrategy>;
    /**
     * Determines if the checks in the group should run in all selected locations in parallel or round-robin.
     */
    runParallel?: pulumi.Input<boolean>;
    /**
     * The id of the runtime to use for this group.
     */
    runtimeId?: pulumi.Input<string>;
    /**
     * An ID reference to a snippet to use in the setup phase of an API check.
     */
    setupSnippetId?: pulumi.Input<number>;
    /**
     * Tags for organizing and filtering checks.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * An ID reference to a snippet to use in the teardown phase of an API check.
     */
    teardownSnippetId?: pulumi.Input<number>;
    /**
     * When true, the account level alert settings will be used, not the alert setting defined on this check group.
     */
    useGlobalAlertSettings?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a CheckGroup resource.
 */
export interface CheckGroupArgs {
    /**
     * Determines if the checks in the group are running or not.
     */
    activated: pulumi.Input<boolean>;
    alertChannelSubscriptions?: pulumi.Input<pulumi.Input<inputs.CheckGroupAlertChannelSubscription>[]>;
    alertSettings?: pulumi.Input<inputs.CheckGroupAlertSettings>;
    apiCheckDefaults?: pulumi.Input<inputs.CheckGroupApiCheckDefaults>;
    /**
     * Determines how many checks are run concurrently when triggering a check group from CI/CD or through the API.
     */
    concurrency: pulumi.Input<number>;
    /**
     * Setting this to `true` will trigger a retry when a check fails from the failing region and another, randomly selected
     * region before marking the check as failed.
     *
     * @deprecated Deprecated
     */
    doubleCheck?: pulumi.Input<boolean>;
    /**
     * Key/value pairs for setting environment variables during check execution, add locked = true to keep value hidden, add
     * secret = true to create a secret variable. These are only relevant for browser checks. Use global environment variables
     * whenever possible.
     */
    environmentVariable?: pulumi.Input<pulumi.Input<inputs.CheckGroupEnvironmentVariable>[]>;
    /**
     * Key/value pairs for setting environment variables during check execution. These are only relevant for browser checks.
     * Use global environment variables whenever possible.
     *
     * @deprecated Deprecated
     */
    environmentVariables?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * A valid piece of Node.js code to run in the setup phase of an API check in this group.
     */
    localSetupScript?: pulumi.Input<string>;
    /**
     * A valid piece of Node.js code to run in the teardown phase of an API check in this group.
     */
    localTeardownScript?: pulumi.Input<string>;
    /**
     * An array of one or more data center locations where to run the checks.
     */
    locations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Determines if any notifications will be sent out when a check in this group fails and/or recovers.
     */
    muted?: pulumi.Input<boolean>;
    /**
     * The name of the check group.
     */
    name?: pulumi.Input<string>;
    /**
     * An array of one or more private locations slugs.
     */
    privateLocations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A strategy for retrying failed check runs.
     */
    retryStrategy?: pulumi.Input<inputs.CheckGroupRetryStrategy>;
    /**
     * Determines if the checks in the group should run in all selected locations in parallel or round-robin.
     */
    runParallel?: pulumi.Input<boolean>;
    /**
     * The id of the runtime to use for this group.
     */
    runtimeId?: pulumi.Input<string>;
    /**
     * An ID reference to a snippet to use in the setup phase of an API check.
     */
    setupSnippetId?: pulumi.Input<number>;
    /**
     * Tags for organizing and filtering checks.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * An ID reference to a snippet to use in the teardown phase of an API check.
     */
    teardownSnippetId?: pulumi.Input<number>;
    /**
     * When true, the account level alert settings will be used, not the alert setting defined on this check group.
     */
    useGlobalAlertSettings?: pulumi.Input<boolean>;
}
