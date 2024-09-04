// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SystemGlobalSslciphersuites extends pulumi.CustomResource {
    /**
     * Get an existing SystemGlobalSslciphersuites resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemGlobalSslciphersuitesState, opts?: pulumi.CustomResourceOptions): SystemGlobalSslciphersuites {
        return new SystemGlobalSslciphersuites(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/systemGlobalSslciphersuites:SystemGlobalSslciphersuites';

    /**
     * Returns true if the given object is an instance of SystemGlobalSslciphersuites.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemGlobalSslciphersuites {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemGlobalSslciphersuites.__pulumiType;
    }

    public readonly cipher!: pulumi.Output<string | undefined>;
    public readonly priority!: pulumi.Output<number | undefined>;
    public readonly version!: pulumi.Output<string>;

    /**
     * Create a SystemGlobalSslciphersuites resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemGlobalSslciphersuitesArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemGlobalSslciphersuitesArgs | SystemGlobalSslciphersuitesState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemGlobalSslciphersuitesState | undefined;
            resourceInputs["cipher"] = state ? state.cipher : undefined;
            resourceInputs["priority"] = state ? state.priority : undefined;
            resourceInputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as SystemGlobalSslciphersuitesArgs | undefined;
            resourceInputs["cipher"] = args ? args.cipher : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemGlobalSslciphersuites.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemGlobalSslciphersuites resources.
 */
export interface SystemGlobalSslciphersuitesState {
    cipher?: pulumi.Input<string>;
    priority?: pulumi.Input<number>;
    version?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SystemGlobalSslciphersuites resource.
 */
export interface SystemGlobalSslciphersuitesArgs {
    cipher?: pulumi.Input<string>;
    priority?: pulumi.Input<number>;
    version?: pulumi.Input<string>;
}
