// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class L3outLoopbackInterfaceProfile extends pulumi.CustomResource {
    /**
     * Get an existing L3outLoopbackInterfaceProfile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: L3outLoopbackInterfaceProfileState, opts?: pulumi.CustomResourceOptions): L3outLoopbackInterfaceProfile {
        return new L3outLoopbackInterfaceProfile(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aci:index/l3outLoopbackInterfaceProfile:L3outLoopbackInterfaceProfile';

    /**
     * Returns true if the given object is an instance of L3outLoopbackInterfaceProfile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is L3outLoopbackInterfaceProfile {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === L3outLoopbackInterfaceProfile.__pulumiType;
    }

    public readonly addr!: pulumi.Output<string>;
    public readonly annotation!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string>;
    public readonly fabricNodeDn!: pulumi.Output<string>;
    public readonly nameAlias!: pulumi.Output<string>;

    /**
     * Create a L3outLoopbackInterfaceProfile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: L3outLoopbackInterfaceProfileArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: L3outLoopbackInterfaceProfileArgs | L3outLoopbackInterfaceProfileState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as L3outLoopbackInterfaceProfileState | undefined;
            resourceInputs["addr"] = state ? state.addr : undefined;
            resourceInputs["annotation"] = state ? state.annotation : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["fabricNodeDn"] = state ? state.fabricNodeDn : undefined;
            resourceInputs["nameAlias"] = state ? state.nameAlias : undefined;
        } else {
            const args = argsOrState as L3outLoopbackInterfaceProfileArgs | undefined;
            if ((!args || args.addr === undefined) && !opts.urn) {
                throw new Error("Missing required property 'addr'");
            }
            if ((!args || args.fabricNodeDn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'fabricNodeDn'");
            }
            resourceInputs["addr"] = args ? args.addr : undefined;
            resourceInputs["annotation"] = args ? args.annotation : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["fabricNodeDn"] = args ? args.fabricNodeDn : undefined;
            resourceInputs["nameAlias"] = args ? args.nameAlias : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(L3outLoopbackInterfaceProfile.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering L3outLoopbackInterfaceProfile resources.
 */
export interface L3outLoopbackInterfaceProfileState {
    addr?: pulumi.Input<string>;
    annotation?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    fabricNodeDn?: pulumi.Input<string>;
    nameAlias?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a L3outLoopbackInterfaceProfile resource.
 */
export interface L3outLoopbackInterfaceProfileArgs {
    addr: pulumi.Input<string>;
    annotation?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    fabricNodeDn: pulumi.Input<string>;
    nameAlias?: pulumi.Input<string>;
}
