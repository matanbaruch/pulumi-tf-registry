// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class WebServiceSecureGenerate extends pulumi.CustomResource {
    /**
     * Get an existing WebServiceSecureGenerate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WebServiceSecureGenerateState, opts?: pulumi.CustomResourceOptions): WebServiceSecureGenerate {
        return new WebServiceSecureGenerate(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/webServiceSecureGenerate:WebServiceSecureGenerate';

    /**
     * Returns true if the given object is an instance of WebServiceSecureGenerate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WebServiceSecureGenerate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WebServiceSecureGenerate.__pulumiType;
    }

    /**
     * The country name
     */
    public readonly country!: pulumi.Output<string | undefined>;
    /**
     * The domain name
     */
    public readonly domainName!: pulumi.Output<string | undefined>;
    /**
     * The location
     */
    public readonly state!: pulumi.Output<string | undefined>;

    /**
     * Create a WebServiceSecureGenerate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: WebServiceSecureGenerateArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WebServiceSecureGenerateArgs | WebServiceSecureGenerateState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as WebServiceSecureGenerateState | undefined;
            resourceInputs["country"] = state ? state.country : undefined;
            resourceInputs["domainName"] = state ? state.domainName : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
        } else {
            const args = argsOrState as WebServiceSecureGenerateArgs | undefined;
            resourceInputs["country"] = args ? args.country : undefined;
            resourceInputs["domainName"] = args ? args.domainName : undefined;
            resourceInputs["state"] = args ? args.state : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(WebServiceSecureGenerate.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering WebServiceSecureGenerate resources.
 */
export interface WebServiceSecureGenerateState {
    /**
     * The country name
     */
    country?: pulumi.Input<string>;
    /**
     * The domain name
     */
    domainName?: pulumi.Input<string>;
    /**
     * The location
     */
    state?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a WebServiceSecureGenerate resource.
 */
export interface WebServiceSecureGenerateArgs {
    /**
     * The country name
     */
    country?: pulumi.Input<string>;
    /**
     * The domain name
     */
    domainName?: pulumi.Input<string>;
    /**
     * The location
     */
    state?: pulumi.Input<string>;
}
