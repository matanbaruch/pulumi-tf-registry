// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Filterpolicy extends pulumi.CustomResource {
    /**
     * Get an existing Filterpolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FilterpolicyState, opts?: pulumi.CustomResourceOptions): Filterpolicy {
        return new Filterpolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'citrixadc:index/filterpolicy:Filterpolicy';

    /**
     * Returns true if the given object is an instance of Filterpolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Filterpolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Filterpolicy.__pulumiType;
    }

    public readonly name!: pulumi.Output<string>;
    public readonly reqaction!: pulumi.Output<string>;
    public readonly resaction!: pulumi.Output<string>;
    public readonly rule!: pulumi.Output<string>;

    /**
     * Create a Filterpolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: FilterpolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FilterpolicyArgs | FilterpolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FilterpolicyState | undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["reqaction"] = state ? state.reqaction : undefined;
            resourceInputs["resaction"] = state ? state.resaction : undefined;
            resourceInputs["rule"] = state ? state.rule : undefined;
        } else {
            const args = argsOrState as FilterpolicyArgs | undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["reqaction"] = args ? args.reqaction : undefined;
            resourceInputs["resaction"] = args ? args.resaction : undefined;
            resourceInputs["rule"] = args ? args.rule : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Filterpolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Filterpolicy resources.
 */
export interface FilterpolicyState {
    name?: pulumi.Input<string>;
    reqaction?: pulumi.Input<string>;
    resaction?: pulumi.Input<string>;
    rule?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Filterpolicy resource.
 */
export interface FilterpolicyArgs {
    name?: pulumi.Input<string>;
    reqaction?: pulumi.Input<string>;
    resaction?: pulumi.Input<string>;
    rule?: pulumi.Input<string>;
}
