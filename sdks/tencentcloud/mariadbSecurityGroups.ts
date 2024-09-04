// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class MariadbSecurityGroups extends pulumi.CustomResource {
    /**
     * Get an existing MariadbSecurityGroups resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MariadbSecurityGroupsState, opts?: pulumi.CustomResourceOptions): MariadbSecurityGroups {
        return new MariadbSecurityGroups(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/mariadbSecurityGroups:MariadbSecurityGroups';

    /**
     * Returns true if the given object is an instance of MariadbSecurityGroups.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MariadbSecurityGroups {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MariadbSecurityGroups.__pulumiType;
    }

    /**
     * instance id.
     */
    public readonly instanceId!: pulumi.Output<string>;
    /**
     * product name, fixed to mariadb.
     */
    public readonly product!: pulumi.Output<string>;
    /**
     * security group id.
     */
    public readonly securityGroupId!: pulumi.Output<string>;

    /**
     * Create a MariadbSecurityGroups resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MariadbSecurityGroupsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MariadbSecurityGroupsArgs | MariadbSecurityGroupsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MariadbSecurityGroupsState | undefined;
            resourceInputs["instanceId"] = state ? state.instanceId : undefined;
            resourceInputs["product"] = state ? state.product : undefined;
            resourceInputs["securityGroupId"] = state ? state.securityGroupId : undefined;
        } else {
            const args = argsOrState as MariadbSecurityGroupsArgs | undefined;
            if ((!args || args.instanceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instanceId'");
            }
            if ((!args || args.product === undefined) && !opts.urn) {
                throw new Error("Missing required property 'product'");
            }
            if ((!args || args.securityGroupId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'securityGroupId'");
            }
            resourceInputs["instanceId"] = args ? args.instanceId : undefined;
            resourceInputs["product"] = args ? args.product : undefined;
            resourceInputs["securityGroupId"] = args ? args.securityGroupId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MariadbSecurityGroups.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MariadbSecurityGroups resources.
 */
export interface MariadbSecurityGroupsState {
    /**
     * instance id.
     */
    instanceId?: pulumi.Input<string>;
    /**
     * product name, fixed to mariadb.
     */
    product?: pulumi.Input<string>;
    /**
     * security group id.
     */
    securityGroupId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a MariadbSecurityGroups resource.
 */
export interface MariadbSecurityGroupsArgs {
    /**
     * instance id.
     */
    instanceId: pulumi.Input<string>;
    /**
     * product name, fixed to mariadb.
     */
    product: pulumi.Input<string>;
    /**
     * security group id.
     */
    securityGroupId: pulumi.Input<string>;
}
