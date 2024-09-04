// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class IpGroupCidr extends pulumi.CustomResource {
    /**
     * Get an existing IpGroupCidr resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IpGroupCidrState, opts?: pulumi.CustomResourceOptions): IpGroupCidr {
        return new IpGroupCidr(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/ipGroupCidr:IpGroupCidr';

    /**
     * Returns true if the given object is an instance of IpGroupCidr.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IpGroupCidr {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IpGroupCidr.__pulumiType;
    }

    public readonly cidr!: pulumi.Output<string>;
    public readonly ipGroupId!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.IpGroupCidrTimeouts | undefined>;

    /**
     * Create a IpGroupCidr resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IpGroupCidrArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IpGroupCidrArgs | IpGroupCidrState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IpGroupCidrState | undefined;
            resourceInputs["cidr"] = state ? state.cidr : undefined;
            resourceInputs["ipGroupId"] = state ? state.ipGroupId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as IpGroupCidrArgs | undefined;
            if ((!args || args.cidr === undefined) && !opts.urn) {
                throw new Error("Missing required property 'cidr'");
            }
            if ((!args || args.ipGroupId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ipGroupId'");
            }
            resourceInputs["cidr"] = args ? args.cidr : undefined;
            resourceInputs["ipGroupId"] = args ? args.ipGroupId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IpGroupCidr.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IpGroupCidr resources.
 */
export interface IpGroupCidrState {
    cidr?: pulumi.Input<string>;
    ipGroupId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.IpGroupCidrTimeouts>;
}

/**
 * The set of arguments for constructing a IpGroupCidr resource.
 */
export interface IpGroupCidrArgs {
    cidr: pulumi.Input<string>;
    ipGroupId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.IpGroupCidrTimeouts>;
}
