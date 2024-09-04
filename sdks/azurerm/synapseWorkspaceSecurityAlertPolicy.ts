// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SynapseWorkspaceSecurityAlertPolicy extends pulumi.CustomResource {
    /**
     * Get an existing SynapseWorkspaceSecurityAlertPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SynapseWorkspaceSecurityAlertPolicyState, opts?: pulumi.CustomResourceOptions): SynapseWorkspaceSecurityAlertPolicy {
        return new SynapseWorkspaceSecurityAlertPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/synapseWorkspaceSecurityAlertPolicy:SynapseWorkspaceSecurityAlertPolicy';

    /**
     * Returns true if the given object is an instance of SynapseWorkspaceSecurityAlertPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SynapseWorkspaceSecurityAlertPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SynapseWorkspaceSecurityAlertPolicy.__pulumiType;
    }

    public readonly disabledAlerts!: pulumi.Output<string[] | undefined>;
    public readonly emailAccountAdminsEnabled!: pulumi.Output<boolean | undefined>;
    public readonly emailAddresses!: pulumi.Output<string[] | undefined>;
    public readonly policyState!: pulumi.Output<string>;
    public readonly retentionDays!: pulumi.Output<number | undefined>;
    public readonly storageAccountAccessKey!: pulumi.Output<string | undefined>;
    public readonly storageEndpoint!: pulumi.Output<string | undefined>;
    public readonly synapseWorkspaceId!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.SynapseWorkspaceSecurityAlertPolicyTimeouts | undefined>;

    /**
     * Create a SynapseWorkspaceSecurityAlertPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SynapseWorkspaceSecurityAlertPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SynapseWorkspaceSecurityAlertPolicyArgs | SynapseWorkspaceSecurityAlertPolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SynapseWorkspaceSecurityAlertPolicyState | undefined;
            resourceInputs["disabledAlerts"] = state ? state.disabledAlerts : undefined;
            resourceInputs["emailAccountAdminsEnabled"] = state ? state.emailAccountAdminsEnabled : undefined;
            resourceInputs["emailAddresses"] = state ? state.emailAddresses : undefined;
            resourceInputs["policyState"] = state ? state.policyState : undefined;
            resourceInputs["retentionDays"] = state ? state.retentionDays : undefined;
            resourceInputs["storageAccountAccessKey"] = state ? state.storageAccountAccessKey : undefined;
            resourceInputs["storageEndpoint"] = state ? state.storageEndpoint : undefined;
            resourceInputs["synapseWorkspaceId"] = state ? state.synapseWorkspaceId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as SynapseWorkspaceSecurityAlertPolicyArgs | undefined;
            if ((!args || args.policyState === undefined) && !opts.urn) {
                throw new Error("Missing required property 'policyState'");
            }
            if ((!args || args.synapseWorkspaceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'synapseWorkspaceId'");
            }
            resourceInputs["disabledAlerts"] = args ? args.disabledAlerts : undefined;
            resourceInputs["emailAccountAdminsEnabled"] = args ? args.emailAccountAdminsEnabled : undefined;
            resourceInputs["emailAddresses"] = args ? args.emailAddresses : undefined;
            resourceInputs["policyState"] = args ? args.policyState : undefined;
            resourceInputs["retentionDays"] = args ? args.retentionDays : undefined;
            resourceInputs["storageAccountAccessKey"] = args?.storageAccountAccessKey ? pulumi.secret(args.storageAccountAccessKey) : undefined;
            resourceInputs["storageEndpoint"] = args ? args.storageEndpoint : undefined;
            resourceInputs["synapseWorkspaceId"] = args ? args.synapseWorkspaceId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["storageAccountAccessKey"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(SynapseWorkspaceSecurityAlertPolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SynapseWorkspaceSecurityAlertPolicy resources.
 */
export interface SynapseWorkspaceSecurityAlertPolicyState {
    disabledAlerts?: pulumi.Input<pulumi.Input<string>[]>;
    emailAccountAdminsEnabled?: pulumi.Input<boolean>;
    emailAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    policyState?: pulumi.Input<string>;
    retentionDays?: pulumi.Input<number>;
    storageAccountAccessKey?: pulumi.Input<string>;
    storageEndpoint?: pulumi.Input<string>;
    synapseWorkspaceId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.SynapseWorkspaceSecurityAlertPolicyTimeouts>;
}

/**
 * The set of arguments for constructing a SynapseWorkspaceSecurityAlertPolicy resource.
 */
export interface SynapseWorkspaceSecurityAlertPolicyArgs {
    disabledAlerts?: pulumi.Input<pulumi.Input<string>[]>;
    emailAccountAdminsEnabled?: pulumi.Input<boolean>;
    emailAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    policyState: pulumi.Input<string>;
    retentionDays?: pulumi.Input<number>;
    storageAccountAccessKey?: pulumi.Input<string>;
    storageEndpoint?: pulumi.Input<string>;
    synapseWorkspaceId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.SynapseWorkspaceSecurityAlertPolicyTimeouts>;
}
