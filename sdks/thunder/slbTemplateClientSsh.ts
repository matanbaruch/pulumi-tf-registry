// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SlbTemplateClientSsh extends pulumi.CustomResource {
    /**
     * Get an existing SlbTemplateClientSsh resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SlbTemplateClientSshState, opts?: pulumi.CustomResourceOptions): SlbTemplateClientSsh {
        return new SlbTemplateClientSsh(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/slbTemplateClientSsh:SlbTemplateClientSsh';

    /**
     * Returns true if the given object is an instance of SlbTemplateClientSsh.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SlbTemplateClientSsh {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SlbTemplateClientSsh.__pulumiType;
    }

    /**
     * Enable SSH forward proxy
     */
    public readonly forwardProxyEnable!: pulumi.Output<number | undefined>;
    /**
     * Specify private-key (Key Name)
     */
    public readonly forwardProxyHostkey!: pulumi.Output<string | undefined>;
    /**
     * Client SSH Template Name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Password Phrase
     */
    public readonly passphrase!: pulumi.Output<string | undefined>;
    /**
     * Customized tag
     */
    public readonly userTag!: pulumi.Output<string | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a SlbTemplateClientSsh resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SlbTemplateClientSshArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SlbTemplateClientSshArgs | SlbTemplateClientSshState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SlbTemplateClientSshState | undefined;
            resourceInputs["forwardProxyEnable"] = state ? state.forwardProxyEnable : undefined;
            resourceInputs["forwardProxyHostkey"] = state ? state.forwardProxyHostkey : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["passphrase"] = state ? state.passphrase : undefined;
            resourceInputs["userTag"] = state ? state.userTag : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as SlbTemplateClientSshArgs | undefined;
            resourceInputs["forwardProxyEnable"] = args ? args.forwardProxyEnable : undefined;
            resourceInputs["forwardProxyHostkey"] = args ? args.forwardProxyHostkey : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["passphrase"] = args ? args.passphrase : undefined;
            resourceInputs["userTag"] = args ? args.userTag : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SlbTemplateClientSsh.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SlbTemplateClientSsh resources.
 */
export interface SlbTemplateClientSshState {
    /**
     * Enable SSH forward proxy
     */
    forwardProxyEnable?: pulumi.Input<number>;
    /**
     * Specify private-key (Key Name)
     */
    forwardProxyHostkey?: pulumi.Input<string>;
    /**
     * Client SSH Template Name
     */
    name?: pulumi.Input<string>;
    /**
     * Password Phrase
     */
    passphrase?: pulumi.Input<string>;
    /**
     * Customized tag
     */
    userTag?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SlbTemplateClientSsh resource.
 */
export interface SlbTemplateClientSshArgs {
    /**
     * Enable SSH forward proxy
     */
    forwardProxyEnable?: pulumi.Input<number>;
    /**
     * Specify private-key (Key Name)
     */
    forwardProxyHostkey?: pulumi.Input<string>;
    /**
     * Client SSH Template Name
     */
    name?: pulumi.Input<string>;
    /**
     * Password Phrase
     */
    passphrase?: pulumi.Input<string>;
    /**
     * Customized tag
     */
    userTag?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
