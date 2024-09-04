// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class RunbookProcess extends pulumi.CustomResource {
    /**
     * Get an existing RunbookProcess resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RunbookProcessState, opts?: pulumi.CustomResourceOptions): RunbookProcess {
        return new RunbookProcess(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'octopusdeploy:index/runbookProcess:RunbookProcess';

    /**
     * Returns true if the given object is an instance of RunbookProcess.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RunbookProcess {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RunbookProcess.__pulumiType;
    }

    /**
     * Read only value containing the last snapshot ID.
     */
    public readonly lastSnapshotId!: pulumi.Output<string | undefined>;
    /**
     * The project ID associated with this runbook process.
     */
    public readonly projectId!: pulumi.Output<string>;
    /**
     * The runbook ID associated with this runbook process.
     */
    public readonly runbookId!: pulumi.Output<string>;
    /**
     * The space ID associated with this resource.
     */
    public readonly spaceId!: pulumi.Output<string>;
    public readonly steps!: pulumi.Output<outputs.RunbookProcessStep[] | undefined>;
    /**
     * The version number of this runbook process.
     */
    public readonly version!: pulumi.Output<number>;

    /**
     * Create a RunbookProcess resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RunbookProcessArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RunbookProcessArgs | RunbookProcessState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RunbookProcessState | undefined;
            resourceInputs["lastSnapshotId"] = state ? state.lastSnapshotId : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["runbookId"] = state ? state.runbookId : undefined;
            resourceInputs["spaceId"] = state ? state.spaceId : undefined;
            resourceInputs["steps"] = state ? state.steps : undefined;
            resourceInputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as RunbookProcessArgs | undefined;
            if ((!args || args.runbookId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'runbookId'");
            }
            resourceInputs["lastSnapshotId"] = args ? args.lastSnapshotId : undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["runbookId"] = args ? args.runbookId : undefined;
            resourceInputs["spaceId"] = args ? args.spaceId : undefined;
            resourceInputs["steps"] = args ? args.steps : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RunbookProcess.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RunbookProcess resources.
 */
export interface RunbookProcessState {
    /**
     * Read only value containing the last snapshot ID.
     */
    lastSnapshotId?: pulumi.Input<string>;
    /**
     * The project ID associated with this runbook process.
     */
    projectId?: pulumi.Input<string>;
    /**
     * The runbook ID associated with this runbook process.
     */
    runbookId?: pulumi.Input<string>;
    /**
     * The space ID associated with this resource.
     */
    spaceId?: pulumi.Input<string>;
    steps?: pulumi.Input<pulumi.Input<inputs.RunbookProcessStep>[]>;
    /**
     * The version number of this runbook process.
     */
    version?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a RunbookProcess resource.
 */
export interface RunbookProcessArgs {
    /**
     * Read only value containing the last snapshot ID.
     */
    lastSnapshotId?: pulumi.Input<string>;
    /**
     * The project ID associated with this runbook process.
     */
    projectId?: pulumi.Input<string>;
    /**
     * The runbook ID associated with this runbook process.
     */
    runbookId: pulumi.Input<string>;
    /**
     * The space ID associated with this resource.
     */
    spaceId?: pulumi.Input<string>;
    steps?: pulumi.Input<pulumi.Input<inputs.RunbookProcessStep>[]>;
    /**
     * The version number of this runbook process.
     */
    version?: pulumi.Input<number>;
}
