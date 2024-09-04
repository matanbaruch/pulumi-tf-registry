// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class CorpIntegration extends pulumi.CustomResource {
    /**
     * Get an existing CorpIntegration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CorpIntegrationState, opts?: pulumi.CustomResourceOptions): CorpIntegration {
        return new CorpIntegration(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'sigsci:index/corpIntegration:CorpIntegration';

    /**
     * Returns true if the given object is an instance of CorpIntegration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CorpIntegration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CorpIntegration.__pulumiType;
    }

    /**
     * Array of event types. Visit https://docs.fastly.com/signalsciences/integrations to find out which events the service you
     * are connecting allows.
     */
    public readonly events!: pulumi.Output<string[] | undefined>;
    /**
     * name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * One of (mailingList, slack, microsoftTeams)
     */
    public readonly type!: pulumi.Output<string>;
    /**
     * Integration URL
     */
    public readonly url!: pulumi.Output<string>;

    /**
     * Create a CorpIntegration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CorpIntegrationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CorpIntegrationArgs | CorpIntegrationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CorpIntegrationState | undefined;
            resourceInputs["events"] = state ? state.events : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["url"] = state ? state.url : undefined;
        } else {
            const args = argsOrState as CorpIntegrationArgs | undefined;
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            if ((!args || args.url === undefined) && !opts.urn) {
                throw new Error("Missing required property 'url'");
            }
            resourceInputs["events"] = args ? args.events : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["url"] = args ? args.url : undefined;
            resourceInputs["name"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CorpIntegration.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CorpIntegration resources.
 */
export interface CorpIntegrationState {
    /**
     * Array of event types. Visit https://docs.fastly.com/signalsciences/integrations to find out which events the service you
     * are connecting allows.
     */
    events?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * name
     */
    name?: pulumi.Input<string>;
    /**
     * One of (mailingList, slack, microsoftTeams)
     */
    type?: pulumi.Input<string>;
    /**
     * Integration URL
     */
    url?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CorpIntegration resource.
 */
export interface CorpIntegrationArgs {
    /**
     * Array of event types. Visit https://docs.fastly.com/signalsciences/integrations to find out which events the service you
     * are connecting allows.
     */
    events?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * One of (mailingList, slack, microsoftTeams)
     */
    type: pulumi.Input<string>;
    /**
     * Integration URL
     */
    url: pulumi.Input<string>;
}
