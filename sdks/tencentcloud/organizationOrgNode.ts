// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class OrganizationOrgNode extends pulumi.CustomResource {
    /**
     * Get an existing OrganizationOrgNode resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OrganizationOrgNodeState, opts?: pulumi.CustomResourceOptions): OrganizationOrgNode {
        return new OrganizationOrgNode(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/organizationOrgNode:OrganizationOrgNode';

    /**
     * Returns true if the given object is an instance of OrganizationOrgNode.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OrganizationOrgNode {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OrganizationOrgNode.__pulumiType;
    }

    /**
     * Node creation time.
     */
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    /**
     * Node name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Parent node ID.
     */
    public readonly parentNodeId!: pulumi.Output<number>;
    /**
     * Notes.
     */
    public readonly remark!: pulumi.Output<string | undefined>;
    /**
     * Node update time.
     */
    public /*out*/ readonly updateTime!: pulumi.Output<string>;

    /**
     * Create a OrganizationOrgNode resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OrganizationOrgNodeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: OrganizationOrgNodeArgs | OrganizationOrgNodeState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as OrganizationOrgNodeState | undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["parentNodeId"] = state ? state.parentNodeId : undefined;
            resourceInputs["remark"] = state ? state.remark : undefined;
            resourceInputs["updateTime"] = state ? state.updateTime : undefined;
        } else {
            const args = argsOrState as OrganizationOrgNodeArgs | undefined;
            if ((!args || args.parentNodeId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'parentNodeId'");
            }
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["parentNodeId"] = args ? args.parentNodeId : undefined;
            resourceInputs["remark"] = args ? args.remark : undefined;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["updateTime"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(OrganizationOrgNode.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering OrganizationOrgNode resources.
 */
export interface OrganizationOrgNodeState {
    /**
     * Node creation time.
     */
    createTime?: pulumi.Input<string>;
    /**
     * Node name.
     */
    name?: pulumi.Input<string>;
    /**
     * Parent node ID.
     */
    parentNodeId?: pulumi.Input<number>;
    /**
     * Notes.
     */
    remark?: pulumi.Input<string>;
    /**
     * Node update time.
     */
    updateTime?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a OrganizationOrgNode resource.
 */
export interface OrganizationOrgNodeArgs {
    /**
     * Node name.
     */
    name?: pulumi.Input<string>;
    /**
     * Parent node ID.
     */
    parentNodeId: pulumi.Input<number>;
    /**
     * Notes.
     */
    remark?: pulumi.Input<string>;
}
