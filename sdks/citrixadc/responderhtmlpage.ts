// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Responderhtmlpage extends pulumi.CustomResource {
    /**
     * Get an existing Responderhtmlpage resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ResponderhtmlpageState, opts?: pulumi.CustomResourceOptions): Responderhtmlpage {
        return new Responderhtmlpage(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'citrixadc:index/responderhtmlpage:Responderhtmlpage';

    /**
     * Returns true if the given object is an instance of Responderhtmlpage.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Responderhtmlpage {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Responderhtmlpage.__pulumiType;
    }

    public readonly cacertfile!: pulumi.Output<string>;
    public readonly comment!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly overwrite!: pulumi.Output<boolean>;
    public readonly src!: pulumi.Output<string>;

    /**
     * Create a Responderhtmlpage resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ResponderhtmlpageArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ResponderhtmlpageArgs | ResponderhtmlpageState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ResponderhtmlpageState | undefined;
            resourceInputs["cacertfile"] = state ? state.cacertfile : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["overwrite"] = state ? state.overwrite : undefined;
            resourceInputs["src"] = state ? state.src : undefined;
        } else {
            const args = argsOrState as ResponderhtmlpageArgs | undefined;
            resourceInputs["cacertfile"] = args ? args.cacertfile : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["overwrite"] = args ? args.overwrite : undefined;
            resourceInputs["src"] = args ? args.src : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Responderhtmlpage.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Responderhtmlpage resources.
 */
export interface ResponderhtmlpageState {
    cacertfile?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    overwrite?: pulumi.Input<boolean>;
    src?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Responderhtmlpage resource.
 */
export interface ResponderhtmlpageArgs {
    cacertfile?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    overwrite?: pulumi.Input<boolean>;
    src?: pulumi.Input<string>;
}
