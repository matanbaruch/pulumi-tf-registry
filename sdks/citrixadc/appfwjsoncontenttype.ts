// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Appfwjsoncontenttype extends pulumi.CustomResource {
    /**
     * Get an existing Appfwjsoncontenttype resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AppfwjsoncontenttypeState, opts?: pulumi.CustomResourceOptions): Appfwjsoncontenttype {
        return new Appfwjsoncontenttype(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'citrixadc:index/appfwjsoncontenttype:Appfwjsoncontenttype';

    /**
     * Returns true if the given object is an instance of Appfwjsoncontenttype.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Appfwjsoncontenttype {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Appfwjsoncontenttype.__pulumiType;
    }

    public readonly isregex!: pulumi.Output<string | undefined>;
    public readonly jsoncontenttypevalue!: pulumi.Output<string>;

    /**
     * Create a Appfwjsoncontenttype resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AppfwjsoncontenttypeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AppfwjsoncontenttypeArgs | AppfwjsoncontenttypeState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AppfwjsoncontenttypeState | undefined;
            resourceInputs["isregex"] = state ? state.isregex : undefined;
            resourceInputs["jsoncontenttypevalue"] = state ? state.jsoncontenttypevalue : undefined;
        } else {
            const args = argsOrState as AppfwjsoncontenttypeArgs | undefined;
            if ((!args || args.jsoncontenttypevalue === undefined) && !opts.urn) {
                throw new Error("Missing required property 'jsoncontenttypevalue'");
            }
            resourceInputs["isregex"] = args ? args.isregex : undefined;
            resourceInputs["jsoncontenttypevalue"] = args ? args.jsoncontenttypevalue : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Appfwjsoncontenttype.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Appfwjsoncontenttype resources.
 */
export interface AppfwjsoncontenttypeState {
    isregex?: pulumi.Input<string>;
    jsoncontenttypevalue?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Appfwjsoncontenttype resource.
 */
export interface AppfwjsoncontenttypeArgs {
    isregex?: pulumi.Input<string>;
    jsoncontenttypevalue: pulumi.Input<string>;
}
