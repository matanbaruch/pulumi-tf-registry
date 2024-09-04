// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Dnspolicylabel extends pulumi.CustomResource {
    /**
     * Get an existing Dnspolicylabel resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DnspolicylabelState, opts?: pulumi.CustomResourceOptions): Dnspolicylabel {
        return new Dnspolicylabel(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'citrixadc:index/dnspolicylabel:Dnspolicylabel';

    /**
     * Returns true if the given object is an instance of Dnspolicylabel.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Dnspolicylabel {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Dnspolicylabel.__pulumiType;
    }

    public readonly labelname!: pulumi.Output<string>;
    public readonly transform!: pulumi.Output<string>;

    /**
     * Create a Dnspolicylabel resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DnspolicylabelArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DnspolicylabelArgs | DnspolicylabelState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DnspolicylabelState | undefined;
            resourceInputs["labelname"] = state ? state.labelname : undefined;
            resourceInputs["transform"] = state ? state.transform : undefined;
        } else {
            const args = argsOrState as DnspolicylabelArgs | undefined;
            if ((!args || args.labelname === undefined) && !opts.urn) {
                throw new Error("Missing required property 'labelname'");
            }
            if ((!args || args.transform === undefined) && !opts.urn) {
                throw new Error("Missing required property 'transform'");
            }
            resourceInputs["labelname"] = args ? args.labelname : undefined;
            resourceInputs["transform"] = args ? args.transform : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Dnspolicylabel.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Dnspolicylabel resources.
 */
export interface DnspolicylabelState {
    labelname?: pulumi.Input<string>;
    transform?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Dnspolicylabel resource.
 */
export interface DnspolicylabelArgs {
    labelname: pulumi.Input<string>;
    transform: pulumi.Input<string>;
}
