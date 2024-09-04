// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Pcpserver extends pulumi.CustomResource {
    /**
     * Get an existing Pcpserver resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PcpserverState, opts?: pulumi.CustomResourceOptions): Pcpserver {
        return new Pcpserver(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'citrixadc:index/pcpserver:Pcpserver';

    /**
     * Returns true if the given object is an instance of Pcpserver.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Pcpserver {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Pcpserver.__pulumiType;
    }

    public readonly ipaddress!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly pcpprofile!: pulumi.Output<string>;
    public readonly port!: pulumi.Output<number>;

    /**
     * Create a Pcpserver resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PcpserverArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PcpserverArgs | PcpserverState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PcpserverState | undefined;
            resourceInputs["ipaddress"] = state ? state.ipaddress : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["pcpprofile"] = state ? state.pcpprofile : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
        } else {
            const args = argsOrState as PcpserverArgs | undefined;
            if ((!args || args.ipaddress === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ipaddress'");
            }
            resourceInputs["ipaddress"] = args ? args.ipaddress : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["pcpprofile"] = args ? args.pcpprofile : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Pcpserver.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Pcpserver resources.
 */
export interface PcpserverState {
    ipaddress?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    pcpprofile?: pulumi.Input<string>;
    port?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a Pcpserver resource.
 */
export interface PcpserverArgs {
    ipaddress: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    pcpprofile?: pulumi.Input<string>;
    port?: pulumi.Input<number>;
}
