// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class OrganizationUserGroup extends pulumi.CustomResource {
    /**
     * Get an existing OrganizationUserGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OrganizationUserGroupState, opts?: pulumi.CustomResourceOptions): OrganizationUserGroup {
        return new OrganizationUserGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aiven:index/organizationUserGroup:OrganizationUserGroup';

    /**
     * Returns true if the given object is an instance of OrganizationUserGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OrganizationUserGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OrganizationUserGroup.__pulumiType;
    }

    /**
     * Time of creation.
     */
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    /**
     * The description of the user group. Changing this property forces recreation of the resource.
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * The ID of the user group.
     */
    public /*out*/ readonly groupId!: pulumi.Output<string>;
    /**
     * The name of the user group. Changing this property forces recreation of the resource.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The ID of the organization. Changing this property forces recreation of the resource.
     */
    public readonly organizationId!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.OrganizationUserGroupTimeouts | undefined>;
    /**
     * Time of last update.
     */
    public /*out*/ readonly updateTime!: pulumi.Output<string>;

    /**
     * Create a OrganizationUserGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OrganizationUserGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: OrganizationUserGroupArgs | OrganizationUserGroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as OrganizationUserGroupState | undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["groupId"] = state ? state.groupId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["organizationId"] = state ? state.organizationId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["updateTime"] = state ? state.updateTime : undefined;
        } else {
            const args = argsOrState as OrganizationUserGroupArgs | undefined;
            if ((!args || args.description === undefined) && !opts.urn) {
                throw new Error("Missing required property 'description'");
            }
            if ((!args || args.organizationId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'organizationId'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["organizationId"] = args ? args.organizationId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["groupId"] = undefined /*out*/;
            resourceInputs["updateTime"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(OrganizationUserGroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering OrganizationUserGroup resources.
 */
export interface OrganizationUserGroupState {
    /**
     * Time of creation.
     */
    createTime?: pulumi.Input<string>;
    /**
     * The description of the user group. Changing this property forces recreation of the resource.
     */
    description?: pulumi.Input<string>;
    /**
     * The ID of the user group.
     */
    groupId?: pulumi.Input<string>;
    /**
     * The name of the user group. Changing this property forces recreation of the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * The ID of the organization. Changing this property forces recreation of the resource.
     */
    organizationId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.OrganizationUserGroupTimeouts>;
    /**
     * Time of last update.
     */
    updateTime?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a OrganizationUserGroup resource.
 */
export interface OrganizationUserGroupArgs {
    /**
     * The description of the user group. Changing this property forces recreation of the resource.
     */
    description: pulumi.Input<string>;
    /**
     * The name of the user group. Changing this property forces recreation of the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * The ID of the organization. Changing this property forces recreation of the resource.
     */
    organizationId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.OrganizationUserGroupTimeouts>;
}
