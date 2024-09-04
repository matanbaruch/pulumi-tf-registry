// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class GrafanaRoleAssociation extends pulumi.CustomResource {
    /**
     * Get an existing GrafanaRoleAssociation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GrafanaRoleAssociationState, opts?: pulumi.CustomResourceOptions): GrafanaRoleAssociation {
        return new GrafanaRoleAssociation(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/grafanaRoleAssociation:GrafanaRoleAssociation';

    /**
     * Returns true if the given object is an instance of GrafanaRoleAssociation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GrafanaRoleAssociation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GrafanaRoleAssociation.__pulumiType;
    }

    public readonly groupIds!: pulumi.Output<string[] | undefined>;
    public readonly role!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.GrafanaRoleAssociationTimeouts | undefined>;
    public readonly userIds!: pulumi.Output<string[] | undefined>;
    public readonly workspaceId!: pulumi.Output<string>;

    /**
     * Create a GrafanaRoleAssociation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GrafanaRoleAssociationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GrafanaRoleAssociationArgs | GrafanaRoleAssociationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as GrafanaRoleAssociationState | undefined;
            resourceInputs["groupIds"] = state ? state.groupIds : undefined;
            resourceInputs["role"] = state ? state.role : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["userIds"] = state ? state.userIds : undefined;
            resourceInputs["workspaceId"] = state ? state.workspaceId : undefined;
        } else {
            const args = argsOrState as GrafanaRoleAssociationArgs | undefined;
            if ((!args || args.role === undefined) && !opts.urn) {
                throw new Error("Missing required property 'role'");
            }
            if ((!args || args.workspaceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceId'");
            }
            resourceInputs["groupIds"] = args ? args.groupIds : undefined;
            resourceInputs["role"] = args ? args.role : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["userIds"] = args ? args.userIds : undefined;
            resourceInputs["workspaceId"] = args ? args.workspaceId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(GrafanaRoleAssociation.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering GrafanaRoleAssociation resources.
 */
export interface GrafanaRoleAssociationState {
    groupIds?: pulumi.Input<pulumi.Input<string>[]>;
    role?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GrafanaRoleAssociationTimeouts>;
    userIds?: pulumi.Input<pulumi.Input<string>[]>;
    workspaceId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a GrafanaRoleAssociation resource.
 */
export interface GrafanaRoleAssociationArgs {
    groupIds?: pulumi.Input<pulumi.Input<string>[]>;
    role: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GrafanaRoleAssociationTimeouts>;
    userIds?: pulumi.Input<pulumi.Input<string>[]>;
    workspaceId: pulumi.Input<string>;
}
