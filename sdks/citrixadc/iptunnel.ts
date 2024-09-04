// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Iptunnel extends pulumi.CustomResource {
    /**
     * Get an existing Iptunnel resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IptunnelState, opts?: pulumi.CustomResourceOptions): Iptunnel {
        return new Iptunnel(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'citrixadc:index/iptunnel:Iptunnel';

    /**
     * Returns true if the given object is an instance of Iptunnel.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Iptunnel {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Iptunnel.__pulumiType;
    }

    public readonly grepayload!: pulumi.Output<string>;
    public readonly ipsecprofilename!: pulumi.Output<string>;
    public readonly local!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly ownergroup!: pulumi.Output<string>;
    public readonly protocol!: pulumi.Output<string>;
    public readonly remote!: pulumi.Output<string>;
    public readonly remotesubnetmask!: pulumi.Output<string>;
    public readonly vlan!: pulumi.Output<number>;

    /**
     * Create a Iptunnel resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: IptunnelArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IptunnelArgs | IptunnelState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IptunnelState | undefined;
            resourceInputs["grepayload"] = state ? state.grepayload : undefined;
            resourceInputs["ipsecprofilename"] = state ? state.ipsecprofilename : undefined;
            resourceInputs["local"] = state ? state.local : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["ownergroup"] = state ? state.ownergroup : undefined;
            resourceInputs["protocol"] = state ? state.protocol : undefined;
            resourceInputs["remote"] = state ? state.remote : undefined;
            resourceInputs["remotesubnetmask"] = state ? state.remotesubnetmask : undefined;
            resourceInputs["vlan"] = state ? state.vlan : undefined;
        } else {
            const args = argsOrState as IptunnelArgs | undefined;
            resourceInputs["grepayload"] = args ? args.grepayload : undefined;
            resourceInputs["ipsecprofilename"] = args ? args.ipsecprofilename : undefined;
            resourceInputs["local"] = args ? args.local : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["ownergroup"] = args ? args.ownergroup : undefined;
            resourceInputs["protocol"] = args ? args.protocol : undefined;
            resourceInputs["remote"] = args ? args.remote : undefined;
            resourceInputs["remotesubnetmask"] = args ? args.remotesubnetmask : undefined;
            resourceInputs["vlan"] = args ? args.vlan : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Iptunnel.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Iptunnel resources.
 */
export interface IptunnelState {
    grepayload?: pulumi.Input<string>;
    ipsecprofilename?: pulumi.Input<string>;
    local?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    ownergroup?: pulumi.Input<string>;
    protocol?: pulumi.Input<string>;
    remote?: pulumi.Input<string>;
    remotesubnetmask?: pulumi.Input<string>;
    vlan?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a Iptunnel resource.
 */
export interface IptunnelArgs {
    grepayload?: pulumi.Input<string>;
    ipsecprofilename?: pulumi.Input<string>;
    local?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    ownergroup?: pulumi.Input<string>;
    protocol?: pulumi.Input<string>;
    remote?: pulumi.Input<string>;
    remotesubnetmask?: pulumi.Input<string>;
    vlan?: pulumi.Input<number>;
}
