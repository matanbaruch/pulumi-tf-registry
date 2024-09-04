// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SynapseWorkspaceAadAdmin extends pulumi.CustomResource {
    /**
     * Get an existing SynapseWorkspaceAadAdmin resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SynapseWorkspaceAadAdminState, opts?: pulumi.CustomResourceOptions): SynapseWorkspaceAadAdmin {
        return new SynapseWorkspaceAadAdmin(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/synapseWorkspaceAadAdmin:SynapseWorkspaceAadAdmin';

    /**
     * Returns true if the given object is an instance of SynapseWorkspaceAadAdmin.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SynapseWorkspaceAadAdmin {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SynapseWorkspaceAadAdmin.__pulumiType;
    }

    public readonly login!: pulumi.Output<string>;
    public readonly objectId!: pulumi.Output<string>;
    public readonly synapseWorkspaceId!: pulumi.Output<string>;
    public readonly tenantId!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.SynapseWorkspaceAadAdminTimeouts | undefined>;

    /**
     * Create a SynapseWorkspaceAadAdmin resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SynapseWorkspaceAadAdminArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SynapseWorkspaceAadAdminArgs | SynapseWorkspaceAadAdminState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SynapseWorkspaceAadAdminState | undefined;
            resourceInputs["login"] = state ? state.login : undefined;
            resourceInputs["objectId"] = state ? state.objectId : undefined;
            resourceInputs["synapseWorkspaceId"] = state ? state.synapseWorkspaceId : undefined;
            resourceInputs["tenantId"] = state ? state.tenantId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as SynapseWorkspaceAadAdminArgs | undefined;
            if ((!args || args.login === undefined) && !opts.urn) {
                throw new Error("Missing required property 'login'");
            }
            if ((!args || args.objectId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'objectId'");
            }
            if ((!args || args.synapseWorkspaceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'synapseWorkspaceId'");
            }
            if ((!args || args.tenantId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'tenantId'");
            }
            resourceInputs["login"] = args ? args.login : undefined;
            resourceInputs["objectId"] = args ? args.objectId : undefined;
            resourceInputs["synapseWorkspaceId"] = args ? args.synapseWorkspaceId : undefined;
            resourceInputs["tenantId"] = args ? args.tenantId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SynapseWorkspaceAadAdmin.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SynapseWorkspaceAadAdmin resources.
 */
export interface SynapseWorkspaceAadAdminState {
    login?: pulumi.Input<string>;
    objectId?: pulumi.Input<string>;
    synapseWorkspaceId?: pulumi.Input<string>;
    tenantId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.SynapseWorkspaceAadAdminTimeouts>;
}

/**
 * The set of arguments for constructing a SynapseWorkspaceAadAdmin resource.
 */
export interface SynapseWorkspaceAadAdminArgs {
    login: pulumi.Input<string>;
    objectId: pulumi.Input<string>;
    synapseWorkspaceId: pulumi.Input<string>;
    tenantId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.SynapseWorkspaceAadAdminTimeouts>;
}
