// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class CloudIntegrationEc2 extends pulumi.CustomResource {
    /**
     * Get an existing CloudIntegrationEc2 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CloudIntegrationEc2State, opts?: pulumi.CustomResourceOptions): CloudIntegrationEc2 {
        return new CloudIntegrationEc2(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'wavefront:index/cloudIntegrationEc2:CloudIntegrationEc2';

    /**
     * Returns true if the given object is an instance of CloudIntegrationEc2.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CloudIntegrationEc2 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CloudIntegrationEc2.__pulumiType;
    }

    public readonly additionalTags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly externalId!: pulumi.Output<string>;
    public readonly forceSave!: pulumi.Output<boolean | undefined>;
    public readonly hostnameTags!: pulumi.Output<string[] | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly roleArn!: pulumi.Output<string>;
    public readonly service!: pulumi.Output<string | undefined>;
    public readonly serviceRefreshRateInMinutes!: pulumi.Output<number | undefined>;

    /**
     * Create a CloudIntegrationEc2 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CloudIntegrationEc2Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CloudIntegrationEc2Args | CloudIntegrationEc2State, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CloudIntegrationEc2State | undefined;
            resourceInputs["additionalTags"] = state ? state.additionalTags : undefined;
            resourceInputs["externalId"] = state ? state.externalId : undefined;
            resourceInputs["forceSave"] = state ? state.forceSave : undefined;
            resourceInputs["hostnameTags"] = state ? state.hostnameTags : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["roleArn"] = state ? state.roleArn : undefined;
            resourceInputs["service"] = state ? state.service : undefined;
            resourceInputs["serviceRefreshRateInMinutes"] = state ? state.serviceRefreshRateInMinutes : undefined;
        } else {
            const args = argsOrState as CloudIntegrationEc2Args | undefined;
            if ((!args || args.externalId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'externalId'");
            }
            if ((!args || args.roleArn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'roleArn'");
            }
            resourceInputs["additionalTags"] = args ? args.additionalTags : undefined;
            resourceInputs["externalId"] = args ? args.externalId : undefined;
            resourceInputs["forceSave"] = args ? args.forceSave : undefined;
            resourceInputs["hostnameTags"] = args ? args.hostnameTags : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["roleArn"] = args ? args.roleArn : undefined;
            resourceInputs["service"] = args ? args.service : undefined;
            resourceInputs["serviceRefreshRateInMinutes"] = args ? args.serviceRefreshRateInMinutes : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CloudIntegrationEc2.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CloudIntegrationEc2 resources.
 */
export interface CloudIntegrationEc2State {
    additionalTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    externalId?: pulumi.Input<string>;
    forceSave?: pulumi.Input<boolean>;
    hostnameTags?: pulumi.Input<pulumi.Input<string>[]>;
    name?: pulumi.Input<string>;
    roleArn?: pulumi.Input<string>;
    service?: pulumi.Input<string>;
    serviceRefreshRateInMinutes?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a CloudIntegrationEc2 resource.
 */
export interface CloudIntegrationEc2Args {
    additionalTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    externalId: pulumi.Input<string>;
    forceSave?: pulumi.Input<boolean>;
    hostnameTags?: pulumi.Input<pulumi.Input<string>[]>;
    name?: pulumi.Input<string>;
    roleArn: pulumi.Input<string>;
    service?: pulumi.Input<string>;
    serviceRefreshRateInMinutes?: pulumi.Input<number>;
}
