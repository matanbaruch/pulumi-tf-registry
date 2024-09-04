// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Appfwxmlcontenttype extends pulumi.CustomResource {
    /**
     * Get an existing Appfwxmlcontenttype resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AppfwxmlcontenttypeState, opts?: pulumi.CustomResourceOptions): Appfwxmlcontenttype {
        return new Appfwxmlcontenttype(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'citrixadc:index/appfwxmlcontenttype:Appfwxmlcontenttype';

    /**
     * Returns true if the given object is an instance of Appfwxmlcontenttype.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Appfwxmlcontenttype {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Appfwxmlcontenttype.__pulumiType;
    }

    public readonly isregex!: pulumi.Output<string | undefined>;
    public readonly xmlcontenttypevalue!: pulumi.Output<string | undefined>;

    /**
     * Create a Appfwxmlcontenttype resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: AppfwxmlcontenttypeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AppfwxmlcontenttypeArgs | AppfwxmlcontenttypeState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AppfwxmlcontenttypeState | undefined;
            resourceInputs["isregex"] = state ? state.isregex : undefined;
            resourceInputs["xmlcontenttypevalue"] = state ? state.xmlcontenttypevalue : undefined;
        } else {
            const args = argsOrState as AppfwxmlcontenttypeArgs | undefined;
            resourceInputs["isregex"] = args ? args.isregex : undefined;
            resourceInputs["xmlcontenttypevalue"] = args ? args.xmlcontenttypevalue : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Appfwxmlcontenttype.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Appfwxmlcontenttype resources.
 */
export interface AppfwxmlcontenttypeState {
    isregex?: pulumi.Input<string>;
    xmlcontenttypevalue?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Appfwxmlcontenttype resource.
 */
export interface AppfwxmlcontenttypeArgs {
    isregex?: pulumi.Input<string>;
    xmlcontenttypevalue?: pulumi.Input<string>;
}
