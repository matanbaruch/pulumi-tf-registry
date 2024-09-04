// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ManagementDataCenterObject extends pulumi.CustomResource {
    /**
     * Get an existing ManagementDataCenterObject resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ManagementDataCenterObjectState, opts?: pulumi.CustomResourceOptions): ManagementDataCenterObject {
        return new ManagementDataCenterObject(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'checkpoint:index/managementDataCenterObject:ManagementDataCenterObject';

    /**
     * Returns true if the given object is an instance of ManagementDataCenterObject.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ManagementDataCenterObject {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ManagementDataCenterObject.__pulumiType;
    }

    /**
     * Additional properties on the object.
     */
    public /*out*/ readonly additionalProperties!: pulumi.Output<outputs.ManagementDataCenterObjectAdditionalProperty[]>;
    /**
     * Color of the object. Should be one of existing colors.
     */
    public readonly color!: pulumi.Output<string | undefined>;
    /**
     * Comments string.
     */
    public readonly comments!: pulumi.Output<string | undefined>;
    /**
     * Name of the Data Center Server the object is in.
     */
    public readonly dataCenterName!: pulumi.Output<string | undefined>;
    /**
     * Unique identifier of the Data Center Server the object is in.
     */
    public readonly dataCenterUid!: pulumi.Output<string | undefined>;
    /**
     * Data Center Object
     */
    public /*out*/ readonly dataCenters!: pulumi.Output<outputs.ManagementDataCenterObjectDataCenter[]>;
    /**
     * Indicates if the object is inaccessible or deleted on Data Center Server.
     */
    public /*out*/ readonly deleted!: pulumi.Output<boolean>;
    /**
     * Collection of group identifiers.
     */
    public readonly groups!: pulumi.Output<string[] | undefined>;
    /**
     * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted -
     * warnings will also be ignored.
     */
    public readonly ignoreErrors!: pulumi.Output<boolean | undefined>;
    /**
     * Apply changes ignoring warnings.
     */
    public readonly ignoreWarnings!: pulumi.Output<boolean | undefined>;
    /**
     * Override default name on data-center.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Object Name in Data Center
     */
    public /*out*/ readonly nameInDataCenter!: pulumi.Output<string>;
    /**
     * Collection of tag identifiers.
     */
    public readonly tags!: pulumi.Output<string[] | undefined>;
    /**
     * Object type in Data Center.
     */
    public /*out*/ readonly typeInDataCenter!: pulumi.Output<string>;
    /**
     * Unique identifier of the object in the Data Center Server.
     */
    public readonly uidInDataCenter!: pulumi.Output<string | undefined>;
    /**
     * Last update time of data center
     */
    public /*out*/ readonly updatedOnDataCenter!: pulumi.Output<{[key: string]: string}>;
    /**
     * URI of the object in the Data Center Server.
     */
    public readonly uri!: pulumi.Output<string | undefined>;

    /**
     * Create a ManagementDataCenterObject resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ManagementDataCenterObjectArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ManagementDataCenterObjectArgs | ManagementDataCenterObjectState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ManagementDataCenterObjectState | undefined;
            resourceInputs["additionalProperties"] = state ? state.additionalProperties : undefined;
            resourceInputs["color"] = state ? state.color : undefined;
            resourceInputs["comments"] = state ? state.comments : undefined;
            resourceInputs["dataCenterName"] = state ? state.dataCenterName : undefined;
            resourceInputs["dataCenterUid"] = state ? state.dataCenterUid : undefined;
            resourceInputs["dataCenters"] = state ? state.dataCenters : undefined;
            resourceInputs["deleted"] = state ? state.deleted : undefined;
            resourceInputs["groups"] = state ? state.groups : undefined;
            resourceInputs["ignoreErrors"] = state ? state.ignoreErrors : undefined;
            resourceInputs["ignoreWarnings"] = state ? state.ignoreWarnings : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["nameInDataCenter"] = state ? state.nameInDataCenter : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["typeInDataCenter"] = state ? state.typeInDataCenter : undefined;
            resourceInputs["uidInDataCenter"] = state ? state.uidInDataCenter : undefined;
            resourceInputs["updatedOnDataCenter"] = state ? state.updatedOnDataCenter : undefined;
            resourceInputs["uri"] = state ? state.uri : undefined;
        } else {
            const args = argsOrState as ManagementDataCenterObjectArgs | undefined;
            resourceInputs["color"] = args ? args.color : undefined;
            resourceInputs["comments"] = args ? args.comments : undefined;
            resourceInputs["dataCenterName"] = args ? args.dataCenterName : undefined;
            resourceInputs["dataCenterUid"] = args ? args.dataCenterUid : undefined;
            resourceInputs["groups"] = args ? args.groups : undefined;
            resourceInputs["ignoreErrors"] = args ? args.ignoreErrors : undefined;
            resourceInputs["ignoreWarnings"] = args ? args.ignoreWarnings : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["uidInDataCenter"] = args ? args.uidInDataCenter : undefined;
            resourceInputs["uri"] = args ? args.uri : undefined;
            resourceInputs["additionalProperties"] = undefined /*out*/;
            resourceInputs["dataCenters"] = undefined /*out*/;
            resourceInputs["deleted"] = undefined /*out*/;
            resourceInputs["nameInDataCenter"] = undefined /*out*/;
            resourceInputs["typeInDataCenter"] = undefined /*out*/;
            resourceInputs["updatedOnDataCenter"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ManagementDataCenterObject.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ManagementDataCenterObject resources.
 */
export interface ManagementDataCenterObjectState {
    /**
     * Additional properties on the object.
     */
    additionalProperties?: pulumi.Input<pulumi.Input<inputs.ManagementDataCenterObjectAdditionalProperty>[]>;
    /**
     * Color of the object. Should be one of existing colors.
     */
    color?: pulumi.Input<string>;
    /**
     * Comments string.
     */
    comments?: pulumi.Input<string>;
    /**
     * Name of the Data Center Server the object is in.
     */
    dataCenterName?: pulumi.Input<string>;
    /**
     * Unique identifier of the Data Center Server the object is in.
     */
    dataCenterUid?: pulumi.Input<string>;
    /**
     * Data Center Object
     */
    dataCenters?: pulumi.Input<pulumi.Input<inputs.ManagementDataCenterObjectDataCenter>[]>;
    /**
     * Indicates if the object is inaccessible or deleted on Data Center Server.
     */
    deleted?: pulumi.Input<boolean>;
    /**
     * Collection of group identifiers.
     */
    groups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted -
     * warnings will also be ignored.
     */
    ignoreErrors?: pulumi.Input<boolean>;
    /**
     * Apply changes ignoring warnings.
     */
    ignoreWarnings?: pulumi.Input<boolean>;
    /**
     * Override default name on data-center.
     */
    name?: pulumi.Input<string>;
    /**
     * Object Name in Data Center
     */
    nameInDataCenter?: pulumi.Input<string>;
    /**
     * Collection of tag identifiers.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Object type in Data Center.
     */
    typeInDataCenter?: pulumi.Input<string>;
    /**
     * Unique identifier of the object in the Data Center Server.
     */
    uidInDataCenter?: pulumi.Input<string>;
    /**
     * Last update time of data center
     */
    updatedOnDataCenter?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * URI of the object in the Data Center Server.
     */
    uri?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ManagementDataCenterObject resource.
 */
export interface ManagementDataCenterObjectArgs {
    /**
     * Color of the object. Should be one of existing colors.
     */
    color?: pulumi.Input<string>;
    /**
     * Comments string.
     */
    comments?: pulumi.Input<string>;
    /**
     * Name of the Data Center Server the object is in.
     */
    dataCenterName?: pulumi.Input<string>;
    /**
     * Unique identifier of the Data Center Server the object is in.
     */
    dataCenterUid?: pulumi.Input<string>;
    /**
     * Collection of group identifiers.
     */
    groups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted -
     * warnings will also be ignored.
     */
    ignoreErrors?: pulumi.Input<boolean>;
    /**
     * Apply changes ignoring warnings.
     */
    ignoreWarnings?: pulumi.Input<boolean>;
    /**
     * Override default name on data-center.
     */
    name?: pulumi.Input<string>;
    /**
     * Collection of tag identifiers.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Unique identifier of the object in the Data Center Server.
     */
    uidInDataCenter?: pulumi.Input<string>;
    /**
     * URI of the object in the Data Center Server.
     */
    uri?: pulumi.Input<string>;
}
