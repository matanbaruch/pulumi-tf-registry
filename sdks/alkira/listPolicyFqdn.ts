// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ListPolicyFqdn extends pulumi.CustomResource {
    /**
     * Get an existing ListPolicyFqdn resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ListPolicyFqdnState, opts?: pulumi.CustomResourceOptions): ListPolicyFqdn {
        return new ListPolicyFqdn(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alkira:index/listPolicyFqdn:ListPolicyFqdn';

    /**
     * Returns true if the given object is an instance of ListPolicyFqdn.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ListPolicyFqdn {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ListPolicyFqdn.__pulumiType;
    }

    /**
     * Description for the list.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * A list of FQDNs.
     */
    public readonly fqdns!: pulumi.Output<string[]>;
    /**
     * ID of `list_dns_server` resource.
     */
    public readonly listDnsServerId!: pulumi.Output<number>;
    /**
     * Name of the list.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the resource.
     */
    public /*out*/ readonly provisionState!: pulumi.Output<string>;

    /**
     * Create a ListPolicyFqdn resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ListPolicyFqdnArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ListPolicyFqdnArgs | ListPolicyFqdnState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ListPolicyFqdnState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["fqdns"] = state ? state.fqdns : undefined;
            resourceInputs["listDnsServerId"] = state ? state.listDnsServerId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["provisionState"] = state ? state.provisionState : undefined;
        } else {
            const args = argsOrState as ListPolicyFqdnArgs | undefined;
            if ((!args || args.fqdns === undefined) && !opts.urn) {
                throw new Error("Missing required property 'fqdns'");
            }
            if ((!args || args.listDnsServerId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'listDnsServerId'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["fqdns"] = args ? args.fqdns : undefined;
            resourceInputs["listDnsServerId"] = args ? args.listDnsServerId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["provisionState"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ListPolicyFqdn.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ListPolicyFqdn resources.
 */
export interface ListPolicyFqdnState {
    /**
     * Description for the list.
     */
    description?: pulumi.Input<string>;
    /**
     * A list of FQDNs.
     */
    fqdns?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * ID of `list_dns_server` resource.
     */
    listDnsServerId?: pulumi.Input<number>;
    /**
     * Name of the list.
     */
    name?: pulumi.Input<string>;
    /**
     * The provisioning state of the resource.
     */
    provisionState?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ListPolicyFqdn resource.
 */
export interface ListPolicyFqdnArgs {
    /**
     * Description for the list.
     */
    description?: pulumi.Input<string>;
    /**
     * A list of FQDNs.
     */
    fqdns: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * ID of `list_dns_server` resource.
     */
    listDnsServerId: pulumi.Input<number>;
    /**
     * Name of the list.
     */
    name?: pulumi.Input<string>;
}
