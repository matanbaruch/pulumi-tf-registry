// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class GrantSystemPrivilege extends pulumi.CustomResource {
    /**
     * Get an existing GrantSystemPrivilege resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GrantSystemPrivilegeState, opts?: pulumi.CustomResourceOptions): GrantSystemPrivilege {
        return new GrantSystemPrivilege(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'materialize:index/grantSystemPrivilege:GrantSystemPrivilege';

    /**
     * Returns true if the given object is an instance of GrantSystemPrivilege.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GrantSystemPrivilege {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GrantSystemPrivilege.__pulumiType;
    }

    /**
     * The system privilege to grant.
     */
    public readonly privilege!: pulumi.Output<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    public readonly region!: pulumi.Output<string>;
    /**
     * The name of the role to grant privilege to.
     */
    public readonly roleName!: pulumi.Output<string>;

    /**
     * Create a GrantSystemPrivilege resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GrantSystemPrivilegeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GrantSystemPrivilegeArgs | GrantSystemPrivilegeState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as GrantSystemPrivilegeState | undefined;
            resourceInputs["privilege"] = state ? state.privilege : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["roleName"] = state ? state.roleName : undefined;
        } else {
            const args = argsOrState as GrantSystemPrivilegeArgs | undefined;
            if ((!args || args.privilege === undefined) && !opts.urn) {
                throw new Error("Missing required property 'privilege'");
            }
            if ((!args || args.roleName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'roleName'");
            }
            resourceInputs["privilege"] = args ? args.privilege : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["roleName"] = args ? args.roleName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(GrantSystemPrivilege.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering GrantSystemPrivilege resources.
 */
export interface GrantSystemPrivilegeState {
    /**
     * The system privilege to grant.
     */
    privilege?: pulumi.Input<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    region?: pulumi.Input<string>;
    /**
     * The name of the role to grant privilege to.
     */
    roleName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a GrantSystemPrivilege resource.
 */
export interface GrantSystemPrivilegeArgs {
    /**
     * The system privilege to grant.
     */
    privilege: pulumi.Input<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    region?: pulumi.Input<string>;
    /**
     * The name of the role to grant privilege to.
     */
    roleName: pulumi.Input<string>;
}
