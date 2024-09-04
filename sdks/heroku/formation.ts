// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Formation extends pulumi.CustomResource {
    /**
     * Get an existing Formation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FormationState, opts?: pulumi.CustomResourceOptions): Formation {
        return new Formation(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'heroku:index/formation:Formation';

    /**
     * Returns true if the given object is an instance of Formation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Formation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Formation.__pulumiType;
    }

    public readonly appId!: pulumi.Output<string>;
    public readonly quantity!: pulumi.Output<number>;
    public readonly size!: pulumi.Output<string>;
    public readonly type!: pulumi.Output<string>;

    /**
     * Create a Formation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FormationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FormationArgs | FormationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FormationState | undefined;
            resourceInputs["appId"] = state ? state.appId : undefined;
            resourceInputs["quantity"] = state ? state.quantity : undefined;
            resourceInputs["size"] = state ? state.size : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as FormationArgs | undefined;
            if ((!args || args.appId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'appId'");
            }
            if ((!args || args.quantity === undefined) && !opts.urn) {
                throw new Error("Missing required property 'quantity'");
            }
            if ((!args || args.size === undefined) && !opts.urn) {
                throw new Error("Missing required property 'size'");
            }
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            resourceInputs["appId"] = args ? args.appId : undefined;
            resourceInputs["quantity"] = args ? args.quantity : undefined;
            resourceInputs["size"] = args ? args.size : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Formation.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Formation resources.
 */
export interface FormationState {
    appId?: pulumi.Input<string>;
    quantity?: pulumi.Input<number>;
    size?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Formation resource.
 */
export interface FormationArgs {
    appId: pulumi.Input<string>;
    quantity: pulumi.Input<number>;
    size: pulumi.Input<string>;
    type: pulumi.Input<string>;
}
