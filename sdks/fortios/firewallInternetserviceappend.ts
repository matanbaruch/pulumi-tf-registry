// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class FirewallInternetserviceappend extends pulumi.CustomResource {
    /**
     * Get an existing FirewallInternetserviceappend resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FirewallInternetserviceappendState, opts?: pulumi.CustomResourceOptions): FirewallInternetserviceappend {
        return new FirewallInternetserviceappend(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortios:index/firewallInternetserviceappend:FirewallInternetserviceappend';

    /**
     * Returns true if the given object is an instance of FirewallInternetserviceappend.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FirewallInternetserviceappend {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FirewallInternetserviceappend.__pulumiType;
    }

    public readonly addrMode!: pulumi.Output<string>;
    public readonly appendPort!: pulumi.Output<number>;
    public readonly matchPort!: pulumi.Output<number>;
    public readonly vdomparam!: pulumi.Output<string>;

    /**
     * Create a FirewallInternetserviceappend resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: FirewallInternetserviceappendArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FirewallInternetserviceappendArgs | FirewallInternetserviceappendState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FirewallInternetserviceappendState | undefined;
            resourceInputs["addrMode"] = state ? state.addrMode : undefined;
            resourceInputs["appendPort"] = state ? state.appendPort : undefined;
            resourceInputs["matchPort"] = state ? state.matchPort : undefined;
            resourceInputs["vdomparam"] = state ? state.vdomparam : undefined;
        } else {
            const args = argsOrState as FirewallInternetserviceappendArgs | undefined;
            resourceInputs["addrMode"] = args ? args.addrMode : undefined;
            resourceInputs["appendPort"] = args ? args.appendPort : undefined;
            resourceInputs["matchPort"] = args ? args.matchPort : undefined;
            resourceInputs["vdomparam"] = args ? args.vdomparam : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(FirewallInternetserviceappend.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering FirewallInternetserviceappend resources.
 */
export interface FirewallInternetserviceappendState {
    addrMode?: pulumi.Input<string>;
    appendPort?: pulumi.Input<number>;
    matchPort?: pulumi.Input<number>;
    vdomparam?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a FirewallInternetserviceappend resource.
 */
export interface FirewallInternetserviceappendArgs {
    addrMode?: pulumi.Input<string>;
    appendPort?: pulumi.Input<number>;
    matchPort?: pulumi.Input<number>;
    vdomparam?: pulumi.Input<string>;
}
