// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Nsweblogparam extends pulumi.CustomResource {
    /**
     * Get an existing Nsweblogparam resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NsweblogparamState, opts?: pulumi.CustomResourceOptions): Nsweblogparam {
        return new Nsweblogparam(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'citrixadc:index/nsweblogparam:Nsweblogparam';

    /**
     * Returns true if the given object is an instance of Nsweblogparam.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Nsweblogparam {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Nsweblogparam.__pulumiType;
    }

    public readonly buffersizemb!: pulumi.Output<number>;
    public readonly customreqhdrs!: pulumi.Output<string[]>;
    public readonly customrsphdrs!: pulumi.Output<string[]>;

    /**
     * Create a Nsweblogparam resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: NsweblogparamArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NsweblogparamArgs | NsweblogparamState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NsweblogparamState | undefined;
            resourceInputs["buffersizemb"] = state ? state.buffersizemb : undefined;
            resourceInputs["customreqhdrs"] = state ? state.customreqhdrs : undefined;
            resourceInputs["customrsphdrs"] = state ? state.customrsphdrs : undefined;
        } else {
            const args = argsOrState as NsweblogparamArgs | undefined;
            resourceInputs["buffersizemb"] = args ? args.buffersizemb : undefined;
            resourceInputs["customreqhdrs"] = args ? args.customreqhdrs : undefined;
            resourceInputs["customrsphdrs"] = args ? args.customrsphdrs : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Nsweblogparam.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Nsweblogparam resources.
 */
export interface NsweblogparamState {
    buffersizemb?: pulumi.Input<number>;
    customreqhdrs?: pulumi.Input<pulumi.Input<string>[]>;
    customrsphdrs?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a Nsweblogparam resource.
 */
export interface NsweblogparamArgs {
    buffersizemb?: pulumi.Input<number>;
    customreqhdrs?: pulumi.Input<pulumi.Input<string>[]>;
    customrsphdrs?: pulumi.Input<pulumi.Input<string>[]>;
}
