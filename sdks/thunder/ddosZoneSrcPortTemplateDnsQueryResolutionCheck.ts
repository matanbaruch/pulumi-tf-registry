// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class DdosZoneSrcPortTemplateDnsQueryResolutionCheck extends pulumi.CustomResource {
    /**
     * Get an existing DdosZoneSrcPortTemplateDnsQueryResolutionCheck resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DdosZoneSrcPortTemplateDnsQueryResolutionCheckState, opts?: pulumi.CustomResourceOptions): DdosZoneSrcPortTemplateDnsQueryResolutionCheck {
        return new DdosZoneSrcPortTemplateDnsQueryResolutionCheck(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/ddosZoneSrcPortTemplateDnsQueryResolutionCheck:DdosZoneSrcPortTemplateDnsQueryResolutionCheck';

    /**
     * Returns true if the given object is an instance of DdosZoneSrcPortTemplateDnsQueryResolutionCheck.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DdosZoneSrcPortTemplateDnsQueryResolutionCheck {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DdosZoneSrcPortTemplateDnsQueryResolutionCheck.__pulumiType;
    }

    /**
     * 'default': Default, No action for future connections; 'blacklist-src': Blacklist the external server for future
     * connections;
     */
    public readonly bigResponseAction!: pulumi.Output<string | undefined>;
    /**
     * Max DNS response size (in Bytes)
     */
    public readonly bigResponseSize!: pulumi.Output<number | undefined>;
    /**
     * 'default': Default, No action for future connections; 'blacklist-src': Blacklist the external server for future
     * connections;
     */
    public readonly domainLockupAction!: pulumi.Output<string | undefined>;
    /**
     * Name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * max session timeout (secs) between DNS external server and Protected object
     */
    public readonly sessionTimeoutValue!: pulumi.Output<number | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a DdosZoneSrcPortTemplateDnsQueryResolutionCheck resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: DdosZoneSrcPortTemplateDnsQueryResolutionCheckArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DdosZoneSrcPortTemplateDnsQueryResolutionCheckArgs | DdosZoneSrcPortTemplateDnsQueryResolutionCheckState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DdosZoneSrcPortTemplateDnsQueryResolutionCheckState | undefined;
            resourceInputs["bigResponseAction"] = state ? state.bigResponseAction : undefined;
            resourceInputs["bigResponseSize"] = state ? state.bigResponseSize : undefined;
            resourceInputs["domainLockupAction"] = state ? state.domainLockupAction : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["sessionTimeoutValue"] = state ? state.sessionTimeoutValue : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as DdosZoneSrcPortTemplateDnsQueryResolutionCheckArgs | undefined;
            resourceInputs["bigResponseAction"] = args ? args.bigResponseAction : undefined;
            resourceInputs["bigResponseSize"] = args ? args.bigResponseSize : undefined;
            resourceInputs["domainLockupAction"] = args ? args.domainLockupAction : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["sessionTimeoutValue"] = args ? args.sessionTimeoutValue : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DdosZoneSrcPortTemplateDnsQueryResolutionCheck.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DdosZoneSrcPortTemplateDnsQueryResolutionCheck resources.
 */
export interface DdosZoneSrcPortTemplateDnsQueryResolutionCheckState {
    /**
     * 'default': Default, No action for future connections; 'blacklist-src': Blacklist the external server for future
     * connections;
     */
    bigResponseAction?: pulumi.Input<string>;
    /**
     * Max DNS response size (in Bytes)
     */
    bigResponseSize?: pulumi.Input<number>;
    /**
     * 'default': Default, No action for future connections; 'blacklist-src': Blacklist the external server for future
     * connections;
     */
    domainLockupAction?: pulumi.Input<string>;
    /**
     * Name
     */
    name?: pulumi.Input<string>;
    /**
     * max session timeout (secs) between DNS external server and Protected object
     */
    sessionTimeoutValue?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DdosZoneSrcPortTemplateDnsQueryResolutionCheck resource.
 */
export interface DdosZoneSrcPortTemplateDnsQueryResolutionCheckArgs {
    /**
     * 'default': Default, No action for future connections; 'blacklist-src': Blacklist the external server for future
     * connections;
     */
    bigResponseAction?: pulumi.Input<string>;
    /**
     * Max DNS response size (in Bytes)
     */
    bigResponseSize?: pulumi.Input<number>;
    /**
     * 'default': Default, No action for future connections; 'blacklist-src': Blacklist the external server for future
     * connections;
     */
    domainLockupAction?: pulumi.Input<string>;
    /**
     * Name
     */
    name?: pulumi.Input<string>;
    /**
     * max session timeout (secs) between DNS external server and Protected object
     */
    sessionTimeoutValue?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
