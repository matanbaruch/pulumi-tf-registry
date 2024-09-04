// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ListGlobalCidr extends pulumi.CustomResource {
    /**
     * Get an existing ListGlobalCidr resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ListGlobalCidrState, opts?: pulumi.CustomResourceOptions): ListGlobalCidr {
        return new ListGlobalCidr(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alkira:index/listGlobalCidr:ListGlobalCidr';

    /**
     * Returns true if the given object is an instance of ListGlobalCidr.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ListGlobalCidr {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ListGlobalCidr.__pulumiType;
    }

    /**
     * CXP the list belongs to.
     */
    public readonly cxp!: pulumi.Output<string>;
    /**
     * Description for the list.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Name of the list.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the resource.
     */
    public /*out*/ readonly provisionState!: pulumi.Output<string>;
    /**
     * A list of associated service types.
     */
    public readonly tags!: pulumi.Output<string[] | undefined>;
    /**
     * A list of CIDRs, The CIDR must be `/24` and a subnet of the following: `10.0.0.0/18`, `172.16.0.0/12`, `192.168.0.0/16`,
     * `100.64.0.0/10`.
     */
    public readonly values!: pulumi.Output<string[]>;

    /**
     * Create a ListGlobalCidr resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ListGlobalCidrArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ListGlobalCidrArgs | ListGlobalCidrState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ListGlobalCidrState | undefined;
            resourceInputs["cxp"] = state ? state.cxp : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["provisionState"] = state ? state.provisionState : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["values"] = state ? state.values : undefined;
        } else {
            const args = argsOrState as ListGlobalCidrArgs | undefined;
            if ((!args || args.cxp === undefined) && !opts.urn) {
                throw new Error("Missing required property 'cxp'");
            }
            if ((!args || args.values === undefined) && !opts.urn) {
                throw new Error("Missing required property 'values'");
            }
            resourceInputs["cxp"] = args ? args.cxp : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["values"] = args ? args.values : undefined;
            resourceInputs["provisionState"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ListGlobalCidr.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ListGlobalCidr resources.
 */
export interface ListGlobalCidrState {
    /**
     * CXP the list belongs to.
     */
    cxp?: pulumi.Input<string>;
    /**
     * Description for the list.
     */
    description?: pulumi.Input<string>;
    /**
     * Name of the list.
     */
    name?: pulumi.Input<string>;
    /**
     * The provisioning state of the resource.
     */
    provisionState?: pulumi.Input<string>;
    /**
     * A list of associated service types.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A list of CIDRs, The CIDR must be `/24` and a subnet of the following: `10.0.0.0/18`, `172.16.0.0/12`, `192.168.0.0/16`,
     * `100.64.0.0/10`.
     */
    values?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a ListGlobalCidr resource.
 */
export interface ListGlobalCidrArgs {
    /**
     * CXP the list belongs to.
     */
    cxp: pulumi.Input<string>;
    /**
     * Description for the list.
     */
    description?: pulumi.Input<string>;
    /**
     * Name of the list.
     */
    name?: pulumi.Input<string>;
    /**
     * A list of associated service types.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A list of CIDRs, The CIDR must be `/24` and a subnet of the following: `10.0.0.0/18`, `172.16.0.0/12`, `192.168.0.0/16`,
     * `100.64.0.0/10`.
     */
    values: pulumi.Input<pulumi.Input<string>[]>;
}
