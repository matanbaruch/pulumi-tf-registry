// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Runbook extends pulumi.CustomResource {
    /**
     * Get an existing Runbook resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RunbookState, opts?: pulumi.CustomResourceOptions): Runbook {
        return new Runbook(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'octopusdeploy:index/runbook:Runbook';

    /**
     * Returns true if the given object is an instance of Runbook.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Runbook {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Runbook.__pulumiType;
    }

    public readonly connectivityPolicies!: pulumi.Output<outputs.RunbookConnectivityPolicy[] | undefined>;
    /**
     * Sets the runbook guided failure mode.
     */
    public readonly defaultGuidedFailureMode!: pulumi.Output<string>;
    /**
     * The description of this runbook.
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * Determines how the runbook is scoped to environments.
     */
    public readonly environmentScope!: pulumi.Output<string>;
    /**
     * When environment_scope is set to "Specified", this is the list of environments the runbook can be run against.
     */
    public readonly environments!: pulumi.Output<string[]>;
    /**
     * Whether to force packages to be re-downloaded or not.
     */
    public readonly forcePackageDownload!: pulumi.Output<boolean>;
    /**
     * The tenanted deployment mode of the runbook. Valid modes are `Untenanted`, `TenantedOrUntenanted`, `Tenanted`
     */
    public readonly multiTenancyMode!: pulumi.Output<string>;
    /**
     * The name of the runbook in Octopus Deploy. This name must be unique.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The project that this runbook belongs to.
     */
    public readonly projectId!: pulumi.Output<string>;
    /**
     * The published snapshot ID.
     */
    public /*out*/ readonly publishedRunbookSnapshotId!: pulumi.Output<string>;
    /**
     * Sets the runbook retention policy.
     */
    public readonly retentionPolicies!: pulumi.Output<outputs.RunbookRetentionPolicy[] | undefined>;
    /**
     * The runbook process ID.
     */
    public /*out*/ readonly runbookProcessId!: pulumi.Output<string>;
    /**
     * The space ID associated with this runbook.
     */
    public readonly spaceId!: pulumi.Output<string>;

    /**
     * Create a Runbook resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RunbookArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RunbookArgs | RunbookState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RunbookState | undefined;
            resourceInputs["connectivityPolicies"] = state ? state.connectivityPolicies : undefined;
            resourceInputs["defaultGuidedFailureMode"] = state ? state.defaultGuidedFailureMode : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["environmentScope"] = state ? state.environmentScope : undefined;
            resourceInputs["environments"] = state ? state.environments : undefined;
            resourceInputs["forcePackageDownload"] = state ? state.forcePackageDownload : undefined;
            resourceInputs["multiTenancyMode"] = state ? state.multiTenancyMode : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["publishedRunbookSnapshotId"] = state ? state.publishedRunbookSnapshotId : undefined;
            resourceInputs["retentionPolicies"] = state ? state.retentionPolicies : undefined;
            resourceInputs["runbookProcessId"] = state ? state.runbookProcessId : undefined;
            resourceInputs["spaceId"] = state ? state.spaceId : undefined;
        } else {
            const args = argsOrState as RunbookArgs | undefined;
            if ((!args || args.projectId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'projectId'");
            }
            resourceInputs["connectivityPolicies"] = args ? args.connectivityPolicies : undefined;
            resourceInputs["defaultGuidedFailureMode"] = args ? args.defaultGuidedFailureMode : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["environmentScope"] = args ? args.environmentScope : undefined;
            resourceInputs["environments"] = args ? args.environments : undefined;
            resourceInputs["forcePackageDownload"] = args ? args.forcePackageDownload : undefined;
            resourceInputs["multiTenancyMode"] = args ? args.multiTenancyMode : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["retentionPolicies"] = args ? args.retentionPolicies : undefined;
            resourceInputs["spaceId"] = args ? args.spaceId : undefined;
            resourceInputs["publishedRunbookSnapshotId"] = undefined /*out*/;
            resourceInputs["runbookProcessId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Runbook.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Runbook resources.
 */
export interface RunbookState {
    connectivityPolicies?: pulumi.Input<pulumi.Input<inputs.RunbookConnectivityPolicy>[]>;
    /**
     * Sets the runbook guided failure mode.
     */
    defaultGuidedFailureMode?: pulumi.Input<string>;
    /**
     * The description of this runbook.
     */
    description?: pulumi.Input<string>;
    /**
     * Determines how the runbook is scoped to environments.
     */
    environmentScope?: pulumi.Input<string>;
    /**
     * When environment_scope is set to "Specified", this is the list of environments the runbook can be run against.
     */
    environments?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Whether to force packages to be re-downloaded or not.
     */
    forcePackageDownload?: pulumi.Input<boolean>;
    /**
     * The tenanted deployment mode of the runbook. Valid modes are `Untenanted`, `TenantedOrUntenanted`, `Tenanted`
     */
    multiTenancyMode?: pulumi.Input<string>;
    /**
     * The name of the runbook in Octopus Deploy. This name must be unique.
     */
    name?: pulumi.Input<string>;
    /**
     * The project that this runbook belongs to.
     */
    projectId?: pulumi.Input<string>;
    /**
     * The published snapshot ID.
     */
    publishedRunbookSnapshotId?: pulumi.Input<string>;
    /**
     * Sets the runbook retention policy.
     */
    retentionPolicies?: pulumi.Input<pulumi.Input<inputs.RunbookRetentionPolicy>[]>;
    /**
     * The runbook process ID.
     */
    runbookProcessId?: pulumi.Input<string>;
    /**
     * The space ID associated with this runbook.
     */
    spaceId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Runbook resource.
 */
export interface RunbookArgs {
    connectivityPolicies?: pulumi.Input<pulumi.Input<inputs.RunbookConnectivityPolicy>[]>;
    /**
     * Sets the runbook guided failure mode.
     */
    defaultGuidedFailureMode?: pulumi.Input<string>;
    /**
     * The description of this runbook.
     */
    description?: pulumi.Input<string>;
    /**
     * Determines how the runbook is scoped to environments.
     */
    environmentScope?: pulumi.Input<string>;
    /**
     * When environment_scope is set to "Specified", this is the list of environments the runbook can be run against.
     */
    environments?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Whether to force packages to be re-downloaded or not.
     */
    forcePackageDownload?: pulumi.Input<boolean>;
    /**
     * The tenanted deployment mode of the runbook. Valid modes are `Untenanted`, `TenantedOrUntenanted`, `Tenanted`
     */
    multiTenancyMode?: pulumi.Input<string>;
    /**
     * The name of the runbook in Octopus Deploy. This name must be unique.
     */
    name?: pulumi.Input<string>;
    /**
     * The project that this runbook belongs to.
     */
    projectId: pulumi.Input<string>;
    /**
     * Sets the runbook retention policy.
     */
    retentionPolicies?: pulumi.Input<pulumi.Input<inputs.RunbookRetentionPolicy>[]>;
    /**
     * The space ID associated with this runbook.
     */
    spaceId?: pulumi.Input<string>;
}
