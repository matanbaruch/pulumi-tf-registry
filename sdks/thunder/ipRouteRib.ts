// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class IpRouteRib extends pulumi.CustomResource {
    /**
     * Get an existing IpRouteRib resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IpRouteRibState, opts?: pulumi.CustomResourceOptions): IpRouteRib {
        return new IpRouteRib(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/ipRouteRib:IpRouteRib';

    /**
     * Returns true if the given object is an instance of IpRouteRib.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IpRouteRib {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IpRouteRib.__pulumiType;
    }

    /**
     * Destination prefix
     */
    public readonly ipDestAddr!: pulumi.Output<string>;
    /**
     * Destination prefix mask
     */
    public readonly ipMask!: pulumi.Output<string>;
    public readonly ipNexthopIpv4s!: pulumi.Output<outputs.IpRouteRibIpNexthopIpv4[] | undefined>;
    public readonly ipNexthopLifs!: pulumi.Output<outputs.IpRouteRibIpNexthopLif[] | undefined>;
    public readonly ipNexthopPartitions!: pulumi.Output<outputs.IpRouteRibIpNexthopPartition[] | undefined>;
    public readonly ipNexthopTunnels!: pulumi.Output<outputs.IpRouteRibIpNexthopTunnel[] | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a IpRouteRib resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IpRouteRibArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IpRouteRibArgs | IpRouteRibState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IpRouteRibState | undefined;
            resourceInputs["ipDestAddr"] = state ? state.ipDestAddr : undefined;
            resourceInputs["ipMask"] = state ? state.ipMask : undefined;
            resourceInputs["ipNexthopIpv4s"] = state ? state.ipNexthopIpv4s : undefined;
            resourceInputs["ipNexthopLifs"] = state ? state.ipNexthopLifs : undefined;
            resourceInputs["ipNexthopPartitions"] = state ? state.ipNexthopPartitions : undefined;
            resourceInputs["ipNexthopTunnels"] = state ? state.ipNexthopTunnels : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as IpRouteRibArgs | undefined;
            if ((!args || args.ipDestAddr === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ipDestAddr'");
            }
            if ((!args || args.ipMask === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ipMask'");
            }
            resourceInputs["ipDestAddr"] = args ? args.ipDestAddr : undefined;
            resourceInputs["ipMask"] = args ? args.ipMask : undefined;
            resourceInputs["ipNexthopIpv4s"] = args ? args.ipNexthopIpv4s : undefined;
            resourceInputs["ipNexthopLifs"] = args ? args.ipNexthopLifs : undefined;
            resourceInputs["ipNexthopPartitions"] = args ? args.ipNexthopPartitions : undefined;
            resourceInputs["ipNexthopTunnels"] = args ? args.ipNexthopTunnels : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IpRouteRib.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IpRouteRib resources.
 */
export interface IpRouteRibState {
    /**
     * Destination prefix
     */
    ipDestAddr?: pulumi.Input<string>;
    /**
     * Destination prefix mask
     */
    ipMask?: pulumi.Input<string>;
    ipNexthopIpv4s?: pulumi.Input<pulumi.Input<inputs.IpRouteRibIpNexthopIpv4>[]>;
    ipNexthopLifs?: pulumi.Input<pulumi.Input<inputs.IpRouteRibIpNexthopLif>[]>;
    ipNexthopPartitions?: pulumi.Input<pulumi.Input<inputs.IpRouteRibIpNexthopPartition>[]>;
    ipNexthopTunnels?: pulumi.Input<pulumi.Input<inputs.IpRouteRibIpNexthopTunnel>[]>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a IpRouteRib resource.
 */
export interface IpRouteRibArgs {
    /**
     * Destination prefix
     */
    ipDestAddr: pulumi.Input<string>;
    /**
     * Destination prefix mask
     */
    ipMask: pulumi.Input<string>;
    ipNexthopIpv4s?: pulumi.Input<pulumi.Input<inputs.IpRouteRibIpNexthopIpv4>[]>;
    ipNexthopLifs?: pulumi.Input<pulumi.Input<inputs.IpRouteRibIpNexthopLif>[]>;
    ipNexthopPartitions?: pulumi.Input<pulumi.Input<inputs.IpRouteRibIpNexthopPartition>[]>;
    ipNexthopTunnels?: pulumi.Input<pulumi.Input<inputs.IpRouteRibIpNexthopTunnel>[]>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
