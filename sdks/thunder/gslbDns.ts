// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class GslbDns extends pulumi.CustomResource {
    /**
     * Get an existing GslbDns resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GslbDnsState, opts?: pulumi.CustomResourceOptions): GslbDns {
        return new GslbDns(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/gslbDns:GslbDns';

    /**
     * Returns true if the given object is an instance of GslbDns.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GslbDns {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GslbDns.__pulumiType;
    }

    /**
     * 'none': No action (default); 'drop': Drop query; 'reject': Send refuse response; 'ignore': Send empty response;
     */
    public readonly action!: pulumi.Output<string | undefined>;
    /**
     * 'none': No logging (default); 'query': DNS Query; 'response': DNS Response; 'both': Both DNS Query and Response;
     */
    public readonly logging!: pulumi.Output<string | undefined>;
    public readonly samplingEnables!: pulumi.Output<outputs.GslbDnsSamplingEnable[] | undefined>;
    /**
     * Logging template (Logging Template Name)
     */
    public readonly template!: pulumi.Output<string | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a GslbDns resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: GslbDnsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GslbDnsArgs | GslbDnsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as GslbDnsState | undefined;
            resourceInputs["action"] = state ? state.action : undefined;
            resourceInputs["logging"] = state ? state.logging : undefined;
            resourceInputs["samplingEnables"] = state ? state.samplingEnables : undefined;
            resourceInputs["template"] = state ? state.template : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as GslbDnsArgs | undefined;
            resourceInputs["action"] = args ? args.action : undefined;
            resourceInputs["logging"] = args ? args.logging : undefined;
            resourceInputs["samplingEnables"] = args ? args.samplingEnables : undefined;
            resourceInputs["template"] = args ? args.template : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(GslbDns.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering GslbDns resources.
 */
export interface GslbDnsState {
    /**
     * 'none': No action (default); 'drop': Drop query; 'reject': Send refuse response; 'ignore': Send empty response;
     */
    action?: pulumi.Input<string>;
    /**
     * 'none': No logging (default); 'query': DNS Query; 'response': DNS Response; 'both': Both DNS Query and Response;
     */
    logging?: pulumi.Input<string>;
    samplingEnables?: pulumi.Input<pulumi.Input<inputs.GslbDnsSamplingEnable>[]>;
    /**
     * Logging template (Logging Template Name)
     */
    template?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a GslbDns resource.
 */
export interface GslbDnsArgs {
    /**
     * 'none': No action (default); 'drop': Drop query; 'reject': Send refuse response; 'ignore': Send empty response;
     */
    action?: pulumi.Input<string>;
    /**
     * 'none': No logging (default); 'query': DNS Query; 'response': DNS Response; 'both': Both DNS Query and Response;
     */
    logging?: pulumi.Input<string>;
    samplingEnables?: pulumi.Input<pulumi.Input<inputs.GslbDnsSamplingEnable>[]>;
    /**
     * Logging template (Logging Template Name)
     */
    template?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
