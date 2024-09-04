// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class PanoramaBgpConditionalAdv extends pulumi.CustomResource {
    /**
     * Get an existing PanoramaBgpConditionalAdv resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PanoramaBgpConditionalAdvState, opts?: pulumi.CustomResourceOptions): PanoramaBgpConditionalAdv {
        return new PanoramaBgpConditionalAdv(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'panos:index/panoramaBgpConditionalAdv:PanoramaBgpConditionalAdv';

    /**
     * Returns true if the given object is an instance of PanoramaBgpConditionalAdv.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PanoramaBgpConditionalAdv {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PanoramaBgpConditionalAdv.__pulumiType;
    }

    public readonly enable!: pulumi.Output<boolean | undefined>;
    public readonly name!: pulumi.Output<string>;
    /**
     * The template.
     */
    public readonly template!: pulumi.Output<string | undefined>;
    /**
     * The template stack.
     */
    public readonly templateStack!: pulumi.Output<string | undefined>;
    public readonly usedBies!: pulumi.Output<string[] | undefined>;
    public readonly virtualRouter!: pulumi.Output<string>;

    /**
     * Create a PanoramaBgpConditionalAdv resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PanoramaBgpConditionalAdvArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PanoramaBgpConditionalAdvArgs | PanoramaBgpConditionalAdvState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PanoramaBgpConditionalAdvState | undefined;
            resourceInputs["enable"] = state ? state.enable : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["template"] = state ? state.template : undefined;
            resourceInputs["templateStack"] = state ? state.templateStack : undefined;
            resourceInputs["usedBies"] = state ? state.usedBies : undefined;
            resourceInputs["virtualRouter"] = state ? state.virtualRouter : undefined;
        } else {
            const args = argsOrState as PanoramaBgpConditionalAdvArgs | undefined;
            if ((!args || args.virtualRouter === undefined) && !opts.urn) {
                throw new Error("Missing required property 'virtualRouter'");
            }
            resourceInputs["enable"] = args ? args.enable : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["template"] = args ? args.template : undefined;
            resourceInputs["templateStack"] = args ? args.templateStack : undefined;
            resourceInputs["usedBies"] = args ? args.usedBies : undefined;
            resourceInputs["virtualRouter"] = args ? args.virtualRouter : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PanoramaBgpConditionalAdv.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PanoramaBgpConditionalAdv resources.
 */
export interface PanoramaBgpConditionalAdvState {
    enable?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    /**
     * The template.
     */
    template?: pulumi.Input<string>;
    /**
     * The template stack.
     */
    templateStack?: pulumi.Input<string>;
    usedBies?: pulumi.Input<pulumi.Input<string>[]>;
    virtualRouter?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a PanoramaBgpConditionalAdv resource.
 */
export interface PanoramaBgpConditionalAdvArgs {
    enable?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    /**
     * The template.
     */
    template?: pulumi.Input<string>;
    /**
     * The template stack.
     */
    templateStack?: pulumi.Input<string>;
    usedBies?: pulumi.Input<pulumi.Input<string>[]>;
    virtualRouter: pulumi.Input<string>;
}
