// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class InfrastructureDeployer extends pulumi.CustomResource {
    /**
     * Get an existing InfrastructureDeployer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InfrastructureDeployerState, opts?: pulumi.CustomResourceOptions): InfrastructureDeployer {
        return new InfrastructureDeployer(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'metalcloud:index/infrastructureDeployer:InfrastructureDeployer';

    /**
     * Returns true if the given object is an instance of InfrastructureDeployer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is InfrastructureDeployer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === InfrastructureDeployer.__pulumiType;
    }

    public readonly allowDataLoss!: pulumi.Output<boolean | undefined>;
    public readonly attemptSoftShutdown!: pulumi.Output<boolean | undefined>;
    public readonly awaitDeployFinished!: pulumi.Output<boolean | undefined>;
    public /*out*/ readonly edited!: pulumi.Output<boolean>;
    public readonly hardShutdownAfterTimeout!: pulumi.Output<boolean | undefined>;
    public readonly infrastructureCustomVariables!: pulumi.Output<{[key: string]: string}>;
    public readonly infrastructureId!: pulumi.Output<number>;
    public /*out*/ readonly infrastructureServiceStatus!: pulumi.Output<string>;
    public readonly keepDetachingDrives!: pulumi.Output<boolean>;
    public readonly preventDeploy!: pulumi.Output<boolean | undefined>;
    public readonly serverAllocationPolicies!: pulumi.Output<outputs.InfrastructureDeployerServerAllocationPolicy[] | undefined>;
    public readonly skipAnsible!: pulumi.Output<boolean>;
    public readonly softShutdownTimeoutSeconds!: pulumi.Output<number | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.InfrastructureDeployerTimeouts | undefined>;
    public readonly workflowTasks!: pulumi.Output<outputs.InfrastructureDeployerWorkflowTask[] | undefined>;

    /**
     * Create a InfrastructureDeployer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: InfrastructureDeployerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: InfrastructureDeployerArgs | InfrastructureDeployerState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as InfrastructureDeployerState | undefined;
            resourceInputs["allowDataLoss"] = state ? state.allowDataLoss : undefined;
            resourceInputs["attemptSoftShutdown"] = state ? state.attemptSoftShutdown : undefined;
            resourceInputs["awaitDeployFinished"] = state ? state.awaitDeployFinished : undefined;
            resourceInputs["edited"] = state ? state.edited : undefined;
            resourceInputs["hardShutdownAfterTimeout"] = state ? state.hardShutdownAfterTimeout : undefined;
            resourceInputs["infrastructureCustomVariables"] = state ? state.infrastructureCustomVariables : undefined;
            resourceInputs["infrastructureId"] = state ? state.infrastructureId : undefined;
            resourceInputs["infrastructureServiceStatus"] = state ? state.infrastructureServiceStatus : undefined;
            resourceInputs["keepDetachingDrives"] = state ? state.keepDetachingDrives : undefined;
            resourceInputs["preventDeploy"] = state ? state.preventDeploy : undefined;
            resourceInputs["serverAllocationPolicies"] = state ? state.serverAllocationPolicies : undefined;
            resourceInputs["skipAnsible"] = state ? state.skipAnsible : undefined;
            resourceInputs["softShutdownTimeoutSeconds"] = state ? state.softShutdownTimeoutSeconds : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["workflowTasks"] = state ? state.workflowTasks : undefined;
        } else {
            const args = argsOrState as InfrastructureDeployerArgs | undefined;
            if ((!args || args.infrastructureId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'infrastructureId'");
            }
            resourceInputs["allowDataLoss"] = args ? args.allowDataLoss : undefined;
            resourceInputs["attemptSoftShutdown"] = args ? args.attemptSoftShutdown : undefined;
            resourceInputs["awaitDeployFinished"] = args ? args.awaitDeployFinished : undefined;
            resourceInputs["hardShutdownAfterTimeout"] = args ? args.hardShutdownAfterTimeout : undefined;
            resourceInputs["infrastructureCustomVariables"] = args ? args.infrastructureCustomVariables : undefined;
            resourceInputs["infrastructureId"] = args ? args.infrastructureId : undefined;
            resourceInputs["keepDetachingDrives"] = args ? args.keepDetachingDrives : undefined;
            resourceInputs["preventDeploy"] = args ? args.preventDeploy : undefined;
            resourceInputs["serverAllocationPolicies"] = args ? args.serverAllocationPolicies : undefined;
            resourceInputs["skipAnsible"] = args ? args.skipAnsible : undefined;
            resourceInputs["softShutdownTimeoutSeconds"] = args ? args.softShutdownTimeoutSeconds : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["workflowTasks"] = args ? args.workflowTasks : undefined;
            resourceInputs["edited"] = undefined /*out*/;
            resourceInputs["infrastructureServiceStatus"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(InfrastructureDeployer.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering InfrastructureDeployer resources.
 */
export interface InfrastructureDeployerState {
    allowDataLoss?: pulumi.Input<boolean>;
    attemptSoftShutdown?: pulumi.Input<boolean>;
    awaitDeployFinished?: pulumi.Input<boolean>;
    edited?: pulumi.Input<boolean>;
    hardShutdownAfterTimeout?: pulumi.Input<boolean>;
    infrastructureCustomVariables?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    infrastructureId?: pulumi.Input<number>;
    infrastructureServiceStatus?: pulumi.Input<string>;
    keepDetachingDrives?: pulumi.Input<boolean>;
    preventDeploy?: pulumi.Input<boolean>;
    serverAllocationPolicies?: pulumi.Input<pulumi.Input<inputs.InfrastructureDeployerServerAllocationPolicy>[]>;
    skipAnsible?: pulumi.Input<boolean>;
    softShutdownTimeoutSeconds?: pulumi.Input<number>;
    timeouts?: pulumi.Input<inputs.InfrastructureDeployerTimeouts>;
    workflowTasks?: pulumi.Input<pulumi.Input<inputs.InfrastructureDeployerWorkflowTask>[]>;
}

/**
 * The set of arguments for constructing a InfrastructureDeployer resource.
 */
export interface InfrastructureDeployerArgs {
    allowDataLoss?: pulumi.Input<boolean>;
    attemptSoftShutdown?: pulumi.Input<boolean>;
    awaitDeployFinished?: pulumi.Input<boolean>;
    hardShutdownAfterTimeout?: pulumi.Input<boolean>;
    infrastructureCustomVariables?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    infrastructureId: pulumi.Input<number>;
    keepDetachingDrives?: pulumi.Input<boolean>;
    preventDeploy?: pulumi.Input<boolean>;
    serverAllocationPolicies?: pulumi.Input<pulumi.Input<inputs.InfrastructureDeployerServerAllocationPolicy>[]>;
    skipAnsible?: pulumi.Input<boolean>;
    softShutdownTimeoutSeconds?: pulumi.Input<number>;
    timeouts?: pulumi.Input<inputs.InfrastructureDeployerTimeouts>;
    workflowTasks?: pulumi.Input<pulumi.Input<inputs.InfrastructureDeployerWorkflowTask>[]>;
}
