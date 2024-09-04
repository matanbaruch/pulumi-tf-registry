// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Cmppolicy extends pulumi.CustomResource {
    /**
     * Get an existing Cmppolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CmppolicyState, opts?: pulumi.CustomResourceOptions): Cmppolicy {
        return new Cmppolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'citrixadc:index/cmppolicy:Cmppolicy';

    /**
     * Returns true if the given object is an instance of Cmppolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Cmppolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Cmppolicy.__pulumiType;
    }

    public readonly name!: pulumi.Output<string>;
    public readonly resaction!: pulumi.Output<string>;
    public readonly rule!: pulumi.Output<string>;

    /**
     * Create a Cmppolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: CmppolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CmppolicyArgs | CmppolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CmppolicyState | undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["resaction"] = state ? state.resaction : undefined;
            resourceInputs["rule"] = state ? state.rule : undefined;
        } else {
            const args = argsOrState as CmppolicyArgs | undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resaction"] = args ? args.resaction : undefined;
            resourceInputs["rule"] = args ? args.rule : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Cmppolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Cmppolicy resources.
 */
export interface CmppolicyState {
    name?: pulumi.Input<string>;
    resaction?: pulumi.Input<string>;
    rule?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Cmppolicy resource.
 */
export interface CmppolicyArgs {
    name?: pulumi.Input<string>;
    resaction?: pulumi.Input<string>;
    rule?: pulumi.Input<string>;
}
